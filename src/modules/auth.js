import { createAction, handleActions } from 'redux-actions';

const TEST = 'auth/TEST';

export const test = createAction(TEST);

//인풋 onchange -> user안에 저장, 렌더링시 폼 초기화, onClick->validation체크 (비동기?),
const initialState = {
  user: {
    username: '',
    password: '',
  },
  auth: null,
  authError: null,
};

const auth = handleActions(
  {
    [TEST]: (state, action) => {
      state;
    },
  },
  initialState
);

export default auth;
