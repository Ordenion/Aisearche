// Minimal ambient declarations to silence TS errors when dependencies aren't installed.
declare module 'react';
declare module 'react/jsx-runtime';

declare namespace JSX {
  interface IntrinsicElements {
    // allow any intrinsic element
    [elemName: string]: any;
  }
}
