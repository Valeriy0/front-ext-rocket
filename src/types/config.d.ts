declare module '../../config' {
  const config: {
    backendBaseUrl: string;
    pollingTimeoutMs: number;
    pollingIntervalMs: number;
  };
  export default config;
}

declare module '@backend/back/index' {
  const backend: any;
  export default backend;
} 