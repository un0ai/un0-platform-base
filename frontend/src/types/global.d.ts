// Global type definitions
declare global {
  // Add any global type definitions here
  interface Window {
    // Add any window-specific types here
  }

  type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
  };

  type Nullable<T> = T | null;

  type AsyncReturnType<T extends (...args: any) => Promise<any>> =
    T extends (...args: any) => Promise<infer R> ? R : any;
}

export {};
