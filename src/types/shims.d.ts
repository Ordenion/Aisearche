// Minimal shims to avoid TS errors before installing real dependencies/types.
// Remove this file after installing `react`, `react-dom`, `react-router-dom` and their @types.

declare module 'react';
declare module 'react-dom';
declare module 'react-dom/client';
declare module 'react/jsx-runtime';

declare module 'react-router-dom' {
  export const BrowserRouter: any;
  export const Routes: any;
  export const Route: any;
  export const Navigate: any;
  export const Link: any;
  export const Outlet: any;
  export function useNavigate(): (to: string, options?: any) => void;
  export function useParams(): Record<string, string | undefined>;
  export default any;
}

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}
