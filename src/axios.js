import axios from 'axios';
import {
  getResponseErrorInterceptor,
  getResponseSuccessInterceptor,
  getRequestLoggerInterceptor,
  getRequestLoggerErrorInterceptor,
  // getBaseURL,
} from '@/utils/axios';
import { isDev } from '@/utils/env';
import logger from '@/utils/logger';

function init() {
  // axios.defaults.baseURL = getBaseURL('https://www.easy-mock.com/mock/5948d1f08ac26d795f412428/tangram');
  axios.defaults.baseURL = 'https://www.easy-mock.com/mock/5948d1f08ac26d795f412428/tangram';

  if (isDev) {
    logger.debug('dev mode: ', global.axiosRequestId, global.axiosResponseId);

    axios.interceptors.request.eject(global.axiosRequestId);
    axios.interceptors.response.eject(global.axiosResponseId);
  }

  global.axiosRequestId = axios.interceptors.request.use(
    getRequestLoggerInterceptor(),
    getRequestLoggerErrorInterceptor(),
  );

  // const errorHandler = isServer ? logger.error : Toast;

  global.axiosResponseId = axios.interceptors.response.use(
    getResponseSuccessInterceptor(logger.error, true),
    getResponseErrorInterceptor(logger.error),
  );
}

export default init;
