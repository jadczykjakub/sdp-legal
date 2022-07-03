declare module '*.scss';
declare module '*.jpg' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const value: any;
  export default value;
}
declare module '*.png' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const value: any;
  export default value;
}
declare module '*.svg' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const value: any;
  export default value;
}
declare module '*.mp4' {
  const value: string;
  export default value;
}
declare module '*.webm' {
  const value: unknown;
  export default value;
}
declare module 'react-dom';
