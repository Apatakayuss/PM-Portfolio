/// <reference types="vite/client" />

declare module 'react' {
  const React: any;
  export default React;
  export const StrictMode: any;
  export const Fragment: any;
  export const useState: any;
  export const useEffect: any;
  export const useMemo: any;
  export const useRef: any;
  export const createElement: any;
  export namespace React {
    export type FC<P = {}> = (props: P) => any;
    export type FormEvent<T = Element> = any;
    export type ChangeEvent<T = Element> = any;
    export type MouseEvent<T = Element> = any;
    export type KeyboardEvent<T = Element> = any;
    export type ClipboardEvent<T = Element> = any;
    export type DragEvent<T = Element> = any;
    export type FocusEvent<T = Element> = any;
    export type TouchEvent<T = Element> = any;
    export type ReactNode = any;
    export interface CSSProperties {
      [key: string]: any;
    }
  }
}

declare module 'react/jsx-runtime' {
  export const jsx: any;
  export const jsxs: any;
  export const Fragment: any;
}

declare module 'react-dom' {
  export function createRoot(container: any): any;
}

declare module 'react-dom/client' {
  export function createRoot(container: any): any;
}

declare module '*.svg' {
  const src: string;
  export default src;
}

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}
