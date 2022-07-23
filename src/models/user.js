import request from 'umi-request';

export default {
  namespace: 'user',
  state: {
    list: [],
  },
  effects: {
    *getUser({ payload }, { call, put }) {
      const res = yield call(() => request.post('/api3008/user/list'));
      const { data } = res;
      yield put({
        type: 'setState',
        payload: {
          list: data.data,
        },
      });
      return res;
    },
  },
  reducers: {
    setState(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};
