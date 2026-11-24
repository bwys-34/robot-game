export const TARGET_FPS = 55;
export const HITCH_MS = 100;

export function summarizeFrames(frames) {
  if (frames.length < 2) return null;
  const intervals = frames.slice(1).map((end, index) => end - frames[index]);
  const duration = frames[frames.length - 1] - frames[0];
  if (duration <= 0) return null;
  return {
    fps: intervals.length * 1000 / duration,
    hitches: intervals.filter(gap => gap >= HITCH_MS).length,
    longest: Math.max(...intervals),
  };
}

export function scoreRun(scenes) {
  if (scenes.length !== 3 || scenes.some(scene => !scene)) return null;
  const scores = scenes.map(({fps, hitches}) => Math.max(0, Math.min(1, fps / 60) * 100 - 5 * hitches));
  return {
    score: Math.round(scores.reduce((sum, score) => sum + score, 0) / scenes.length),
    passed: scenes.every(({fps, hitches}) => fps >= TARGET_FPS && hitches === 0),
  };
}
