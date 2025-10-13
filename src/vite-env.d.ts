/// <reference types="vite/client" />

// Support for uppercase image extensions
declare module '*.JPG' {
  const src: string;
  export default src;
}

declare module '*.JPEG' {
  const src: string;
  export default src;
}

declare module '*.PNG' {
  const src: string;
  export default src;
}