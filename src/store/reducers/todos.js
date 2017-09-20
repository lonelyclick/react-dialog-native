import { getApiType } from '@/utils/redux';

export default function todos(state = [], action) {
  const type = action.type;

  if (type === getApiType('getTodo')) {
    return state.concat(action.payload.data);
  }

  return state;
}
