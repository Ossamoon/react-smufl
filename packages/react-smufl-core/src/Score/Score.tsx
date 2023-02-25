import { ScoreContextProvider } from './ScoreContext';
import { SVGSVGElementDefaultProps } from '../utils/types';

export type ScoreMetaProps = {
  unit: number; // SMuFL Unit
};

export type ScoreProps = SVGSVGElementDefaultProps & {
  staffSpaceHeight: number; // CSS Pixel
  width: number; // CSS Pixel
  height: number; // CSS Pixel
};

export const coreScore =
  ({ unit }: ScoreMetaProps) =>
  ({ staffSpaceHeight, width, height, ...props }: ScoreProps) => {
    const viewBoxWidth = (width / staffSpaceHeight) * unit;
    const viewBoxHeight = (height / staffSpaceHeight) * unit;

    return (
      <ScoreContextProvider value={{ unit }}>
        <svg
          width={width}
          height={height}
          viewBox={`0, 0, ${viewBoxWidth}, ${viewBoxHeight}`}
          {...props}
        />
      </ScoreContextProvider>
    );
  };
