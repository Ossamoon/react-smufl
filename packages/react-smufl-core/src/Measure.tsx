export interface MeasureProps {
  children: React.ReactNode;
}

export const Measure = ({ children }: MeasureProps) => {
  return <g>{children}</g>;
};
