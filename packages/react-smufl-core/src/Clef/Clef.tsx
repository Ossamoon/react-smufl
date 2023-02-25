import { ClefBox } from './ClefBox';
import { coreClefPath } from './ClefPath';
import { SVGGElementDefaultProps } from '../utils/types';

export type ClefMetaProps = {
  ClefPath: ReturnType<typeof coreClefPath>;
};

export type ClefProps = {
  line?: number | undefined;
  x?: number | undefined;
  y?: number | undefined;
} & SVGGElementDefaultProps;

export const coreClef =
  ({ ClefPath }: ClefMetaProps) =>
  ({ children, ...props }: ClefProps) => {
    return (
      <ClefBox {...props}>
        <ClefPath />
        {children}
      </ClefBox>
    );
  };
