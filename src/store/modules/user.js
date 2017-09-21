import axios from 'axios';
import { createActions, handleActions } from 'redux-actions';
import { convert2Map, convert2Ids } from '@/utils/redux';

const getUsers = () => axios.get('/todo', { skipErrorValidate: true }).then(({ data }) => data);
const addUser = user => user;

export const actions = createActions({
  addUser,
  getUsers,
});

export default handleActions({
  addUser: ({ entities, ids }, { payload: user }) => ({
    entities: { ...entities, [user.id]: user },
    ids: [...ids, user.id],
  }),
  getUsers: (state, { payload: users }) => ({
    ...state,
    entities: {
      ...state.entities,
      ...convert2Map(users, 'id'),
    },
    ids: [...state.ids, ...convert2Ids(users)],
  }),
}, {
  entities: {},
  ids: [],
});
