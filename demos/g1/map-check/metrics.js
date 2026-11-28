export const FRAME_TARGET = Object.freeze({fps: 55, p95: 25, hitch: 100});
const DEV_NORMAL = Object.freeze({fps: 42, p95: 36, hitch: 100});
const DEV_PRESSURE = Object.freeze({fps: 30, p95: 50, hitch: 100});

export function frameTarget(standard, pressure) {
  if (standard === 'dev') return pressure ? DEV_PRESSURE : DEV_NORMAL;
  return FRAME_TARGET;
}

export function renderRatio(width, height, dpr, pixelMultiplier) {
  return Math.min(1, dpr, Math.sqrt(1_000_000 / (width * height))) * Math.sqrt(pixelMultiplier);
}

export function summarize(gaps) {
  if (!gaps.length) return null;
  const ordered = gaps.slice().sort((a, b) => a - b);
  const duration = gaps.reduce((total, gap) => total + gap, 0);
  return {
    fps: gaps.length * 1000 / duration,
    p95: ordered[Math.ceil(gaps.length * .95) - 1],
    hitches: gaps.filter(gap => gap >= FRAME_TARGET.hitch).length,
    longest: ordered[ordered.length - 1],
  };
}

export function passes(result, target = FRAME_TARGET) {
  return !!result && result.fps >= target.fps && result.p95 <= target.p95 && result.hitches === 0;
}

export function combineClips(clips, target = FRAME_TARGET) {
  const results = clips.map(summarize);
  return {
    ...summarize(clips.flat()),
    worstFps: Math.min(...results.map(result => result?.fps ?? 0)),
    passed: results.length > 0 && results.every(result => passes(result, target)),
  };
}
