import React from 'react';

export type SVGElementDefaultProps = Partial<{
  style: React.CSSProperties;
  className: string;
  tabIndex: number;
}>;

export type SVGSVGElementDefaultProps = SVGElementDefaultProps &
  Partial<{
    children: React.ReactNode;
  }>;

export type SVGGElementDefaultProps = SVGElementDefaultProps &
  Partial<{
    children: React.ReactNode;
  }>;

export type SVGPathElementDefaultProps = SVGElementDefaultProps;
