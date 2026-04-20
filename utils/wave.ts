export const WAVE_WIDTH = 80;
export const BACKGROUND_AMPLITUDE = 18;

export function getWaveX(
  y: number,
  canvasHeight: number,
  amplitude: number,
  phase: number,
  waveOffset: number,
) {
  const normalizedY = y / canvasHeight;
  return (
    WAVE_WIDTH / 2 +
    amplitude * Math.sin(normalizedY * Math.PI * 4 + phase + waveOffset * Math.PI * 2)
  );
}

export function generateWavePath(
  canvasHeight: number,
  phase: number,
  amplitude: number,
  waveOffset: number,
  points = 20,
) {
  let path = `M ${WAVE_WIDTH / 2} 0`;
  for (let i = 0; i <= points; i++) {
    const y = (i / points) * canvasHeight;
    const x = getWaveX(y, canvasHeight, amplitude, phase, waveOffset);
    path += ` L ${x} ${y}`;
  }
  return path;
}
