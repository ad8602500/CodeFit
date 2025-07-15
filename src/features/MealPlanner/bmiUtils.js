export function calculateBMI(weight, height) {
  const w = parseFloat(weight);
  const h = parseFloat(height) / 100;
  if (!w || !h) return null;
  return (w / (h * h)).toFixed(2);
}
