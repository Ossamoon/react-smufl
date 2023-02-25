import { StaffContextProvider } from './StaffContext';
import { useScoreContext } from '../Score';

import { SVGGElementDefaultProps } from '../utils/types';
import { transform, translate } from '../utils/transform';

export type StaffBoxProps = {
  width: number;
  lines?: 1 | 2 | 3 | 4 | 5 | 6 | undefined;
  x?: number | undefined;
  y?: number | undefined;
} & SVGGElementDefaultProps;

export const StaffBox = ({ width, lines = 5, x = 0, y = 0, ...props }: StaffBoxProps) => {
  const { unit } = useScoreContext();
  return (
    <StaffContextProvider value={{ lines }}>
      <g transform={transform(translate(x * unit, y * unit))} {...props} />
    </StaffContextProvider>
  );
};
