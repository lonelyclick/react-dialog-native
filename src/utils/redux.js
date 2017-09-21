import { isArray } from '@/utils/lang';
import logger from '@/utils/logger';

// export const API_ROOT = 'https://www.easy-mock.com/mock/5948d1f08ac26d795f412428/tangram';

export function convert2Map(list, uniqueName = 'id') {
  if (!isArray(list)) list = [list];

  return list.reduce((result, current) => {
    const key = current[uniqueName];

    if (!key) {
      logger.warn('convert2Map: can not find correct key: ', key, current);
    }

    return {
      ...result,
      [key]: current,
    };
  }, {});
}

export function convert2Ids(list, uniqueName = 'id') {
  return list.map(ele => ele[uniqueName]);
}
