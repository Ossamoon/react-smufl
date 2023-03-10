import { coreClef, coreClefPath } from '@react-smufl/core';

export const FClefPath = coreClefPath({
  path: 'M8 -635c-9 0 -13 6 -13 12c0 8 6 13 15 18c233 133 371 289 371 568c0 157 -46 261 -152 261c-102 0 -162 -73 -162 -113c0 -10 3 -18 16 -18s23 7 50 7c49 0 96 -40 96 -104c0 -62 -43 -106 -106 -106c-81 0 -123 69 -123 149c0 96 78 223 252 223c173 0 279 -116 279 -290c0 -304 -260 -482 -506 -602c-6 -3 -12 -5 -17 -5zM629 70c-31 0 -55 24 -55 55s24 55 55 55s55 -24 55 -55s-24 -55 -55 -55zM630 -179c-31 0 -54 23 -54 54s23 54 54 54s54 -23 54 -54s-23 -54 -54 -54z',
});

export const FClef = coreClef({ ClefPath: FClefPath });
