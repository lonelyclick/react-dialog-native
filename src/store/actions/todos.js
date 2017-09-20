import { CALL_API } from 'redux-api-middleware';

import { setupApiTypes } from '@/utils/redux';

export function getTodo() {
  return {
    [CALL_API]: {
      endpoint: ' https://www.easy-mock.com/mock/5948d1f08ac26d795f412428/tangram/todo',
      method: 'GET',
      types: setupApiTypes('getTodo'),
    },
  };
}
