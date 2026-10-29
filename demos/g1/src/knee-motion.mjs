import { Vector3, Quaternion, MathUtils } from 'three';

// The Blender exporter maps URDF (X,Y,Z) into glTF (X,Z,-Y).
// Keep each joint's installation quaternion, then rotate in its local frame.
export class KneeMotion {
  constructor(joint) {
    if (!joint || !Array.isArray(joint.userData.axis)) throw new Error('Missing knee joint axis');
    const { axis, lower, upper } = joint.userData;
    if (!Number.isFinite(lower) || !Number.isFinite(upper) || lower >= upper) throw new Error('Invalid knee limits');
    this.joint = joint;
    this.axis = new Vector3(axis[0], axis[2], -axis[1]).normalize();
    this.base = joint.quaternion.clone();
    this.rotation = new Quaternion();
    this.lower = MathUtils.radToDeg(lower);
    this.upper = MathUtils.radToDeg(upper);
    this.angle = 0;
    this.playing = false;
    this.direction = 1;
  }
  setAngle(degrees) {
    if (!Number.isFinite(degrees)) return;
    this.angle = MathUtils.clamp(degrees, this.lower, this.upper);
    this.rotation.setFromAxisAngle(this.axis, MathUtils.degToRad(this.angle));
    this.joint.quaternion.copy(this.base).multiply(this.rotation);
  }
  play() { this.playing = true; }
  pause() { this.playing = false; }
  reset() { this.pause(); this.direction = 1; this.setAngle(0); }
  update(seconds) {
    if (!this.playing || !Number.isFinite(seconds) || seconds <= 0) return;
    const span = this.upper - this.lower;
    // Triangle wave reflects at both limits without overshooting, even on long frames.
    let phase = this.direction > 0 ? this.angle - this.lower : 2 * span - (this.angle - this.lower);
    phase = (phase + seconds * 24) % (2 * span);
    this.direction = phase < span ? 1 : -1;
    this.setAngle(this.lower + (phase <= span ? phase : 2 * span - phase));
  }
}
