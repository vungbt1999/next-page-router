import axios, {
  AxiosError,
  InternalAxiosRequestConfig,
  AxiosRequestHeaders,
  AxiosResponse
} from 'axios';
import { format } from 'date-fns';
import queryString from 'query-string';
// import localStorageHelper, { KeyStorage } from '../helpers/local-storage';

const getLabelLogRequest = (config: InternalAxiosRequestConfig) => {
  const method = config?.method?.toUpperCase();
  const url = config.url;
  return `${format(new Date(), 'HH:mm:ss:SSS')} <<< ${
    config['timeoutErrorMessage']
  } ${method} ${url}`;
};

export const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_RESTFUL_API_BASE_URL,
  timeout: 10000,
  paramsSerializer: (params: Record<string, any>) => queryString.stringify(params)
});

// Add a request interceptor
instance.interceptors.request.use(
  function (config: InternalAxiosRequestConfig) {
    // Do something before request is sent
    if (process.env.NODE_ENV !== 'production') {
      config['timeoutErrorMessage'] = format(new Date(), 'HH:mm:ss:SSS');
    }
    return config;
  },
  function (error: AxiosError) {
    // Do something with request error
    if (!error.response) {
      if (process.browser) {
        console.log('Alert here====>', process.browser);
      }
      return { message: error.message, error: error.message };
    }
    return error.response.data;
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response: AxiosResponse<any, any>) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    if (process.env.NODE_ENV !== 'production') {
      const labelLog = getLabelLogRequest(response.config);
      console.groupCollapsed(labelLog);
      Object.keys(response.config.params || {}).length &&
        console.log('params', response.config.params);
      response.config.data && console.log('data', response.config.data);
      console.log('response', response.data);
      console.groupEnd();
    }
    return response.data;
  },
  function (error: AxiosError<any>) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    const response = error?.response;
    // alert.error(response?.data?.message || error.message);
    if (response?.status) {
      return { error: error, message: error.message, ...response?.data };
    }
    return { message: error.message, error: error.message };
  }
);

export type HeaderConf = {
  authorization?: boolean;
  locale?: string;
} & Record<string, unknown>;

export type Res<T = any> = T & {
  error?: string;
  message?: string;
};

export type ListParams<T = any> = T & {
  limit?: number;
  page?: number;
};

export type ListRes<T = any> = Res<{
  items: T[];
  total: number;
}>;

export const getAccessToken = async () => {
  // const session = await getSession();
  // if (session) {
  //   return session?.accessToken;
  // }
  return null;
};

export const getHeader = async (headerConf: HeaderConf = {}) => {
  const { authorization, locale, ...reset } = headerConf;
  const headers = { ...reset };
  if (authorization) {
    headers['Authorization'] = await getAccessToken();
  }
  if (locale) {
    headers['Accept-Language'] = locale;
  } else {
    // if (isBrowser()) {
    //   headers['Accept-Language'] = localStorageHelper.getObject(KeyStorage.LOCALE)?.key;
    // }
  }
  return headers as AxiosRequestHeaders;
};

const axiosClient = {
  async get<T = any>(url: string, params?: any, headerConf?: HeaderConf) {
    const headers = await getHeader(headerConf);
    return instance.get<any, T>(url, { params, headers });
  },
  async post<T = any>(url: string, data: T, headerConf?: HeaderConf) {
    const headers = await getHeader(headerConf);
    return instance.post<any, T>(url, data, { headers });
  },
  async put<T = any>(url: string, data: T, headerConf?: HeaderConf) {
    const headers = await getHeader(headerConf);
    return instance.put<any, T>(url, data, { headers });
  },
  async delete<T = any>(url: string, headerConf?: HeaderConf) {
    const headers = await getHeader(headerConf);
    return instance.delete<any, T>(url, { headers });
  }
};

export default axiosClient;
