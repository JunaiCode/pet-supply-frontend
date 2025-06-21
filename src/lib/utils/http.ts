// helpers/helpHttp.ts
export const helpHttp = () => {
  const baseUrl = "https://pet-supply-backend.onrender.com/api/";

  const customFetch = (endpoint: string, options: RequestInit = {}) => {
    const defaultHeaders = {
      accept: "application/json",
    };

    const controller = new AbortController();
    options.signal = controller.signal;
    options.method = options.method || "GET";

    const isFormData = options.body instanceof FormData;

    options.headers = options.headers
      ? { ...options.headers, ...defaultHeaders }
      : defaultHeaders;

    // No transformar FormData, sí transformar objetos JSON
    if (!isFormData && options.body && typeof options.body === "object") {
      options.body = JSON.stringify(options.body);
      options.headers["Content-Type"] = "application/json";
    }

    setTimeout(() => controller.abort(), 3000);

    return fetch(`${baseUrl}${endpoint}`, options)
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
    get: (url: string, options = {}) => customFetch(url, options),
    post: (url: string, options = {}) => customFetch(url, { ...options, method: "POST" }),
    put: (url: string, options = {}) => customFetch(url, { ...options, method: "PUT" }),
    del: (url: string, options = {}) => customFetch(url, { ...options, method: "DELETE" }),
  };
};
