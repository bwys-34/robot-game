"""Assemble the official URDF in Blender and export a local exhibition GLB.

blender --background --factory-startup --python tools/build-g1-model.py
"""
import bpy
import json
import math
from pathlib import Path
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parent.parent
SOURCE = ROOT / 'demos/g1/source'
DEST = ROOT / 'demos/g1/assets'
DEST.mkdir(parents=True, exist_ok=True)
bpy.ops.object.select_all(action='SELECT')
bpy.ops.object.delete(use_global=False)
urdf = ET.parse(SOURCE / 'g1_29dof_rev_1_0.urdf').getroot()

def vector(element, key, default='0 0 0'):
    return tuple(float(n) for n in (element.get(key, default) if element is not None else default).split())

def transform(obj, origin):
    obj.location = vector(origin, 'xyz')
    obj.rotation_mode = 'XYZ'
    obj.rotation_euler = vector(origin, 'rpy')

materials = {}
for name, color, metallic, roughness in [
    ('dark', (.018, .026, .032, 1), .25, .31),
    ('white', (.62, .67, .66, 1), .52, .3),
]:
    material = bpy.data.materials.new(name)
    material.diffuse_color = color
    material.use_nodes = True
    shader = material.node_tree.nodes.get('Principled BSDF')
    shader.inputs['Base Color'].default_value = color
    shader.inputs['Metallic'].default_value = metallic
    shader.inputs['Roughness'].default_value = roughness
    materials[name] = material

links = {}
incoming_joints = {joint.find('child').get('link'):joint.get('name') for joint in urdf.findall('joint')}
for element in urdf.findall('link'):
    obj = bpy.data.objects.new(element.get('name'), None)
    bpy.context.collection.objects.link(obj)
    links[element.get('name')] = obj

    inertial = element.find('inertial')
    mass = float(inertial.find('mass').get('value')) if inertial is not None else 0.0
    inertial_origin = vector(inertial.find('origin'), 'xyz') if inertial is not None else (0.0, 0.0, 0.0)
    obj['urdf_link'] = True
    obj['incoming_joint'] = incoming_joints.get(element.get('name'), '')
    obj['mass'] = mass
    # Store the inertial point in glTF's local Y-up basis for browser-side CoM.
    obj['center_of_mass'] = [inertial_origin[0], inertial_origin[2], -inertial_origin[1]]

stats = {'source': 'unitreerobotics/unitree_ros', 'commit': '15ebe53f4cd77e7d745ae83b9d7ff90e685e8998',
         'variant': 'g1_29dof_rev_1_0', 'note': 'Official sample configuration; not verified against the exhibition unit.', 'joints': [], 'links': []}
for joint in urdf.findall('joint'):
    pivot = bpy.data.objects.new(joint.get('name'), None)
    bpy.context.collection.objects.link(pivot)
    pivot.parent = links[joint.find('parent').get('link')]
    transform(pivot, joint.find('origin'))
    links[joint.find('child').get('link')].parent = pivot
    if joint.get('type') != 'fixed':
        axis = vector(joint.find('axis'), 'xyz', '1 0 0')
        limit = joint.find('limit')
        pivot['axis'] = list(axis)
        pivot['lower'] = float(limit.get('lower'))
        pivot['upper'] = float(limit.get('upper'))
        stats['joints'].append({'name':joint.get('name'), 'axis':axis, 'lower':pivot['lower'], 'upper':pivot['upper']})

for element in urdf.findall('link'):
    for i, visual in enumerate(element.findall('visual')):
        mesh = visual.find('geometry/mesh')
        if mesh is None:
            continue
        filename = SOURCE / mesh.get('filename')
        bpy.ops.wm.stl_import(filepath=str(filename), forward_axis='Y', up_axis='Z')
        obj = bpy.context.object
        obj.name = element.get('name') + '_visual_' + str(i)
        obj.parent = links[element.get('name')]
        transform(obj, visual.find('origin'))
        obj.scale = vector(mesh, 'scale', '1 1 1')
        if len(obj.data.polygons) > 12000:
            decimate = obj.modifiers.new('Web mesh reduction', 'DECIMATE')
            decimate.ratio = 12000 / len(obj.data.polygons)
            bpy.context.view_layer.objects.active = obj
            bpy.ops.object.modifier_apply(modifier=decimate.name)
        obj.data.validate(clean_customdata=True)
        obj.data.update()
        for polygon in obj.data.polygons:
            polygon.use_smooth = True
        material = visual.find('material')
        obj.data.materials.clear()
        obj.data.materials.append(materials.get(material.get('name') if material is not None else 'white', materials['white']))

# The URDF origin is at the pelvis. Put the lowest point at the viewer's floor.
bpy.context.view_layer.update()
from mathutils import Vector
lowest = min((obj.matrix_world @ Vector(corner)).z for obj in bpy.context.scene.objects if obj.type == 'MESH' for corner in obj.bound_box)
root = links['pelvis']
root.location.z -= lowest
stats['triangles'] = sum(len(obj.data.polygons) for obj in bpy.context.scene.objects if obj.type == 'MESH')
stats['meshObjects'] = sum(obj.type == 'MESH' for obj in bpy.context.scene.objects)
bpy.context.scene.unit_settings.system = 'METRIC'
bpy.ops.wm.save_as_mainfile(filepath=str(DEST / 'g1-sample.blend'))
bpy.ops.export_scene.gltf(filepath=str(DEST / 'g1-sample.glb'), export_format='GLB', export_yup=True,
                          export_extras=True, export_animations=False, export_cameras=False, export_lights=False)
stats['links'] = [
    {
        'name':element.get('name'),
        'incomingJoint':incoming_joints.get(element.get('name')),
        'movable':any(joint.get('name') == incoming_joints.get(element.get('name')) and joint.get('type') != 'fixed' for joint in urdf.findall('joint')),
        'mass':float(element.find('inertial/mass').get('value')) if element.find('inertial/mass') is not None else 0.0,
        'centerOfMass':list(links[element.get('name')]['center_of_mass']),
    }
    for element in urdf.findall('link')
]
(DEST / 'model-info.json').write_text(json.dumps(stats, ensure_ascii=False, indent=2), encoding='utf-8')
print('G1_EXPORT_COMPLETE ' + json.dumps({'triangles': stats['triangles'], 'meshes': stats['meshObjects'], 'glbBytes': (DEST / 'g1-sample.glb').stat().st_size}))
