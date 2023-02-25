export const staffPath = (
  lines: number,
  width: number,
  staffPathLineThickness: number,
  unit: number
) => {
  const stroke = staffPathLineThickness * unit;
  const boxWidth = width * unit;

  let path = '';
  for (let i = 0; i < lines; i++) {
    path += `M0 ${i * unit - stroke / 2}v${stroke}h${boxWidth}v-${stroke}z`;
  }

  return path;
};
