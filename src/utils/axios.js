// import { networkInterfaces } from 'os';
import { hasOwnProperty } from '@/utils/lang';
import logger from '@/utils/logger';

const isProd = process.env.NODE_ENV === 'production';

export const getResponseErrorInterceptor = errorCallback => (error) => {
  logger.info(error);
  errorCallback(error.message);

  throw error;
};

export const getResponseSuccessInterceptor = (errorCallback, skipNullValidate) => (res) => {
  logger.debug(
    'axios request finish: ',
    res && res.status,
    res && res.data && res.data.errorMSG,
    res && res.data && res.data.data ? 'correct' : 'error',
  );
  if (!res.headers || res.config.skipResponseInterceptor) return res;

  try {
    if (!/^application\/json/.test(res.headers['content-type'].toLowerCase())) {
      throw new Error('数据格式错误，请重试');
    }

    if (!res.data.success && !res.config.skipErrorValidate) {
      throw new Error(isProd ? res.data.errorMSG : `${res.data.errorCode}:${res.data.errorMSG} - 数据请求失败，请重试`);
    }

    const data = res.data.data;

    if (data === null && !res.config.skipNullValidate && !skipNullValidate) {
      throw new Error('没有找到对应信息，请重试');
    }

    const pager = hasOwnProperty(res.data, 'total') ? {
      pager: {
        total: res.data.total,
        totalPage: res.data.totalPage,
        pageIndex: res.data.offset,
      },
    } : {};

    return { data, ...pager, res };
  } catch (e) {
    if (typeof errorCallback === 'function') {
      errorCallback(e.message);
    }
    throw e;
  }
};

export const getRequestLoggerInterceptor = () => (config) => {
  logger.debug('axios request start: ', config && config.url, config && JSON.stringify(config.data || config.params));
  return config;
};

export const getRequestLoggerErrorInterceptor = () => (error) => {
  logger.debug('axios request error: ', error);
  return Promise.reject(error);
};

// const getLocalhost = () => {
//   const inferface = networkInterfaces();
//   const network = Object.keys(inferface).map(k => inferface[k]);
//
//   for (let i = 0; i < network.length; i += 1) {
//     const ipv4 = network[i].filter(n => n.family === 'IPv4' && !n.internal);
//
//     if (ipv4.length) {
//       return ipv4[0].address;
//     }
//   }
//
//   return 'localhost';
// };

// export const getBaseURL = (remoteHost) => {
//   if (process.env.NODE_ENV === 'production') {
//     return remoteHost;
//   }
//
//   return `http://${getLocalhost()}:3001`;
// };
