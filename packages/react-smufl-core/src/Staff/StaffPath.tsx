import { useScoreContext } from '../Score';
import { staffPath } from '../utils/path';
import { transform, translate } from '../utils/transform';
import { SVGPathElementDefaultProps } from '../utils/types';

export type StaffPathMetaProps = {
  staffPathLineThickness: number;
};

export type StaffPathProps = {
  width: number;
  lines?: 1 | 2 | 3 | 4 | 5 | 6 | undefined;
  x?: number | undefined;
  y?: number | undefined;
} & SVGPathElementDefaultProps;

export const coreStaffPath =
  ({ staffPathLineThickness }: StaffPathMetaProps) =>
  ({ width, lines = 5, x = 0, y = 0 }: StaffPathProps) => {
    const { unit } = useScoreContext();
    return (
      <path
        d={staffPath(lines, width, staffPathLineThickness, unit)}
        transform={transform(translate(x * unit, y * unit))}
      />
    );
  };
