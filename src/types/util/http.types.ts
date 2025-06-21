/* eslint-disable @typescript-eslint/no-explicit-any */
export interface RequestOptions extends RequestInit {
  body?: any;
}


export interface HelpHttp {
  get: (url: string, options?: RequestOptions) => Promise<any>;
  post: (url: string, options?: RequestOptions) => Promise<any>;
  put: (url: string, options?: RequestOptions) => Promise<any>;
  del: (url: string, options?: RequestOptions) => Promise<any>;
}
