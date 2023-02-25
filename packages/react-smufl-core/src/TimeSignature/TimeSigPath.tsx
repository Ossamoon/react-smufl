import { useScoreContext } from '../Score';
import { useStaffContext } from '../Staff/StaffContext';
import { SVGPathElementDefaultProps } from '../utils/types';
import { transform, translate, scale } from '../utils/transform';

export type TimeSigPathMetaProps = {
  path: string;
};

export type TimeSigPathProps = SVGPathElementDefaultProps & {
  line: number;
  x?: number | undefined;
  scale?: number | undefined;
};

export const coreTimeSigPath =
  ({ path }: TimeSigPathMetaProps) =>
  ({ line, x = 0, scale: s = 1, ...props }: TimeSigPathProps) => {
    const { unit } = useScoreContext();
    const { lines } = useStaffContext();

    return (
      <path
        d={path}
        transform={transform(translate(x * unit, (lines - line) * unit), scale(s, s), scale(1, -1))}
        {...props}
      />
    );
  };
