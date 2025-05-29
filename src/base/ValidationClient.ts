namespace ValidationClient {
  export interface ValidationClientOptions {
    accountSid: string;
    credentialSid: string;
    signingKey: string;
    privateKey: string;
    algorithm?: string;
  }
}

export = ValidationClient;
