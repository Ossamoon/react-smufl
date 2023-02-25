export const translate = (x: number, y: number): string => {
  if (x === 0 && y === 0) {
    return '';
  }
  return `translate(${x}, ${y})`;
};

export const scale = (x: number, y: number): string => {
  if (x === 1 && y === 1) {
    return '';
  }
  return `scale(${x}, ${y})`;
};

export const transform = (...args: string[]): string | undefined => {
  const filtered = args.filter((arg) => arg !== '');
  if (filtered.length === 0) {
    return undefined;
  }
  return filtered.join(' ');
};
