import { useScoreContext } from '../Score';
import { SVGPathElementDefaultProps } from '../utils/types';
import { transform, translate, scale } from '../utils/transform';

export type ClefPathMetaProps = {
  path: string;
};

export type ClefPathProps = {
  scale?: number | undefined;
  x?: number | undefined;
  y?: number | undefined;
} & SVGPathElementDefaultProps;

export const coreClefPath =
  ({ path }: ClefPathMetaProps) =>
  ({ scale: s = 1, x = 0, y = 0, ...props }: ClefPathProps) => {
    const { unit } = useScoreContext();
    return (
      <path
        d={path}
        transform={transform(translate(x * unit, y * unit), scale(s, s), scale(1, -1))}
        {...props}
      />
    );
  };
