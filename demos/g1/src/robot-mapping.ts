import * as THREE from 'three';

export interface RobotMapping {
  links: Map<string, THREE.Object3D>;
  joints: Map<string, THREE.Object3D>;
  linkToJoint: Map<string, THREE.Object3D>;
  jointToLink: Map<string, THREE.Object3D>;
  meshesByLink: Map<string, THREE.Mesh[]>;
  pickableMeshes: THREE.Mesh[];
}

export interface LinkRecord {
  name:string;
  incomingJoint?:string;
  movable?:boolean;
  mass?:number;
  centerOfMass?:[number,number,number];
}

/** Index the existing URDF-derived GLB hierarchy without rewriting its source. */
export function buildRobotMapping(model: THREE.Object3D,records:LinkRecord[]=[]): RobotMapping {
  const mapping: RobotMapping = {
    links:new Map(), joints:new Map(), linkToJoint:new Map(), jointToLink:new Map(),
    meshesByLink:new Map(), pickableMeshes:[],
  };

  model.traverse(object => {
    if (object.userData.urdf_link===true || object.name === 'pelvis' || object.name.endsWith('_link') || object.name.endsWith('_rubber_hand')) {
      object.userData.linkName = object.name;
      mapping.links.set(object.name,object);
    }
    if (object.name.endsWith('_joint') && Array.isArray(object.userData.axis)) mapping.joints.set(object.name,object);
  });

  for (const [linkName,link] of mapping.links) {
    const incoming = link.parent;
    if (incoming?.name.endsWith('_joint')) mapping.linkToJoint.set(linkName,incoming);
    if (incoming && mapping.joints.has(incoming.name)) mapping.jointToLink.set(incoming.name,link);
  }

  model.traverse(object => {
    if (!(object as THREE.Mesh).isMesh) return;
    let ancestor: THREE.Object3D | null = object;
    while (ancestor && !ancestor.userData.linkName) ancestor = ancestor.parent;
    if (!ancestor) return;
    const linkName = String(ancestor.userData.linkName);
    object.userData.linkName = linkName;
    const meshes = mapping.meshesByLink.get(linkName) ?? [];
    meshes.push(object as THREE.Mesh);
    mapping.meshesByLink.set(linkName,meshes);
    const incoming = mapping.linkToJoint.get(linkName);
    if (incoming && mapping.joints.has(incoming.name)) {
      object.userData.interactiveLink = true;
      mapping.pickableMeshes.push(object as THREE.Mesh);
    }
  });
  for(const record of records){const link=mapping.links.get(record.name); if(!link)continue;
    link.userData.mass=record.mass;
    link.userData.centerOfMass=record.centerOfMass;
  }
  model.updateMatrixWorld(true);
  return mapping;
}
