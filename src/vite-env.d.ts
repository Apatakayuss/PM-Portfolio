/// <reference types="vite/client" />

declare module 'react' {
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

  const React: {
    FC: FC;
    FormEvent: FormEvent<any>;
    ChangeEvent: ChangeEvent<any>;
    MouseEvent: MouseEvent<any>;
    KeyboardEvent: KeyboardEvent<any>;
    ClipboardEvent: ClipboardEvent<any>;
    DragEvent: DragEvent<any>;
    FocusEvent: FocusEvent<any>;
    TouchEvent: TouchEvent<any>;
    ReactNode: ReactNode;
    CSSProperties: CSSProperties;
    StrictMode: any;
    Fragment: any;
    useState: <T>(initialState: T | (() => T)) => [T, (value: T | ((prev: T) => T)) => void];
    useEffect: (effect: () => void | (() => void), deps?: any[]) => void;
    useMemo: <T>(factory: () => T, deps?: any[]) => T;
    useRef: <T>(initialValue: T) => { current: T };
    createElement: any;
  } & {
    [key: string]: any;
  };

  export default React;
  export const StrictMode: any;
  export const Fragment: any;
  export function useState<T>(initialState: T | (() => T)): [T, (value: T | ((prev: T) => T)) => void];
  export function useEffect(effect: () => void | (() => void), deps?: any[]): void;
  export function useMemo<T>(factory: () => T, deps?: any[]): T;
  export function useRef<T>(initialValue: T): { current: T };
  export const createElement: any;
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
