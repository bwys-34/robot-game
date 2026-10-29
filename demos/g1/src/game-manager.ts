export type GamePhase = 'scan' | 'unlocked' | 'challenge' | 'complete';
export type GameMode = 'isolated' | 'chain';
export type ExperienceMode = 'observe' | 'challenge';
export type MotionSource = 'idle' | 'teaching' | 'chain' | 'manual';

/** Tracks exhibit progress independently of rendering, posing, and safety analysis. */
export class GameManager {
  private readonly discoveryJoints: Set<string>;
  private readonly found = new Set<string>();
  private currentPhase: GamePhase = 'scan';
  private currentMode: GameMode = 'isolated';
  private hasFallen = false;
  private outsideDuration = 0;
  private currentExperience: ExperienceMode = 'challenge';

  constructor(discoveryJoints: readonly string[], private readonly fallDelaySeconds = .5) {
    this.discoveryJoints = new Set(discoveryJoints);
  }

  get discovered(): ReadonlySet<string> { return this.found; }
  get unlocked(): boolean {
    return this.discoveryJoints.size > 0 && this.found.size === this.discoveryJoints.size;
  }
  get phase(): GamePhase { return this.currentPhase; }
  get mode(): GameMode { return this.currentMode; }
  get fallen(): boolean { return this.hasFallen; }
  get outsideSeconds(): number { return this.outsideDuration; }
  get experience(): ExperienceMode { return this.currentExperience; }

  setExperience(mode: ExperienceMode): void {
    this.resetPose();
    this.currentExperience = mode;
  }

  discover(jointName: string): { added: boolean; unlockedNow: boolean } {
    if (this.currentExperience !== 'challenge' || this.currentMode !== 'isolated' || this.hasFallen ||
        !this.discoveryJoints.has(jointName) || this.found.has(jointName)) {
      return { added: false, unlockedNow: false };
    }
    this.found.add(jointName);
    const unlockedNow = this.unlocked;
    if (unlockedNow && this.currentPhase === 'scan') this.currentPhase = 'unlocked';
    return { added: true, unlockedNow };
  }

  beginChain(): boolean {
    if ((this.currentExperience === 'challenge' && !this.unlocked) || this.hasFallen) return false;
    this.currentMode = 'chain';
    this.outsideDuration = 0;
    return true;
  }

  finishChain(): void {
    this.cancelChain();
    if (this.currentExperience === 'challenge' && this.unlocked && this.currentPhase !== 'complete') this.currentPhase = 'challenge';
  }

  cancelChain(): void {
    if(this.currentMode==='chain')this.outsideDuration=0;
    this.currentMode = 'isolated';
  }

  /** Returns true only on the frame that first crosses the continuous fall delay. */
  update(deltaSeconds: number, outside: boolean, source: MotionSource = 'manual'): boolean {
    if (!Number.isFinite(deltaSeconds) || deltaSeconds < 0) return false;
    if (this.currentExperience === 'observe' || source !== 'manual' || this.currentMode === 'chain' || !outside) {
      this.outsideDuration = 0;
      return false;
    }
    if (this.hasFallen) return false;
    this.outsideDuration += deltaSeconds;
    if (this.outsideDuration <= this.fallDelaySeconds) return false;
    this.hasFallen = true;
    if (this.currentPhase === 'challenge') this.currentPhase = 'complete';
    return true;
  }

  resetPose(): void {
    this.hasFallen = false;
    this.outsideDuration=0;
    this.cancelChain();
  }

  restart(): void {
    this.resetPose();
    this.found.clear();
    this.currentPhase = 'scan';
  }
}
