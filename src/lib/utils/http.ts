import { HelpHttp, RequestOptions } from '@/types/util/http.types'; // ajusta según la ubicación

export const helpHttp = (): HelpHttp => {
  const customFetch = (endpoint: string, options: RequestOptions = {}) => {
    const defaultHeaders = {
      accept: "application/json",
    };

    const controller = new AbortController();
    options.signal = controller.signal;

    options.method = options.method || "GET";
    options.headers = options.headers
      ? { ...options.headers, ...defaultHeaders }
      : defaultHeaders;

    options.body = options.body ? JSON.stringify(options.body) : false;
    if (!options.body) delete options.body;

    setTimeout(() => controller.abort(), 3000);

    return fetch(endpoint, options)
      .then((res) =>
        res.ok
          ? res.json()
          : Promise.reject({
              err: true,
              status: res.status || "00",
              statusText: res.statusText || "Ocurrió un error",
            })
      )
      .catch((err) => err);
  };

  return {
    get: (url, options) => customFetch(url, options),
    post: (url, options = {}) => {
      options.method = "POST";
      return customFetch(url, options);
    },
    put: (url, options = {}) => {
      options.method = "PUT";
      return customFetch(url, options);
    },
    del: (url, options = {}) => {
      options.method = "DELETE";
      return customFetch(url, options);
    },
  };
};
