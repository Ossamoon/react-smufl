import { StaffBox } from './StaffBox';
import { coreStaffPath } from './StaffPath';
import { SVGGElementDefaultProps } from '../utils/types';

export type StaffMetaProps = {
  StaffPath: ReturnType<typeof coreStaffPath>;
};

export type StaffProps = {
  width: number;
  lines?: 1 | 2 | 3 | 4 | 5 | 6 | undefined;
  x?: number | undefined;
  y?: number | undefined;
} & SVGGElementDefaultProps;

export const coreStaff =
  ({ StaffPath }: StaffMetaProps) =>
  ({ children, ...props }: StaffProps) => {
    return (
      <StaffBox {...props}>
        <StaffPath width={props.width} lines={props.lines} />
        {children}
      </StaffBox>
    );
  };
