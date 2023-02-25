import { useScoreContext } from '../Score';
import { useStaffContext } from '../Staff/StaffContext';

import { SVGGElementDefaultProps } from '../utils/types';
import { transform, translate } from '../utils/transform';

export type ClefBoxProps = {
  line?: number | undefined;
  x?: number | undefined;
  y?: number | undefined;
} & SVGGElementDefaultProps;

export const ClefBox = ({ line, x = 0, y = 0, children, ...props }: ClefBoxProps) => {
  const { unit } = useScoreContext();
  const { lines } = useStaffContext();
  return (
    <g
      transform={transform(translate(x * unit, (line !== undefined ? lines - line : y) * unit))}
      {...props}
    />
  );
};
