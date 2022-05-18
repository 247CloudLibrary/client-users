import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import { takeLatest } from "redux-saga/effects";
import { createRequestActionTypes } from "../lib/createRequestSaga";
import createRequestSaga from "../lib/createRequestSaga";
import * as authAPI from "../lib/api/auth";

const CHANGE_FIELD = "auth/CHANGE_FIELD";
const INITIALIZE_FORM = "auth/INITIALIZE_FORM";

const [SIGNUP, SIGNUP_SUCCESS, SIGNUP_FAILURE] =
  createRequestActionTypes("auth/SIGNUP");

const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] =
  createRequestActionTypes("auth/LOGIN");

const PROFILE = "auth/PROFILE";

export const changeField = createAction(
  CHANGE_FIELD,
  ({ form, key, value }) => ({
    form,
    key,
    value,
  })
);

export const initializeForm = createAction(INITIALIZE_FORM, (form) => form);

export const signUp = createAction(
  SIGNUP,
  ({
    userId,
    userName,
    password,
    passwordConfirm,
    gender,
    birth,
    address,
    email,
    tel,
  }) => ({
    userId,
    userName,
    password,
    passwordConfirm,
    gender,
    birth,
    address,
    email,
    tel,
  })
);

export const login = createAction(LOGIN, ({ userId, password }) => ({
  userId,
  password,
}));

export const profile = createAction(
  PROFILE,
  ({ userName, gender, birth, address, email, tel }) => ({
    userName,
    gender,
    birth,
    address,
    email,
    tel,
  })
);

// Saga 생성
const signUpSaga = createRequestSaga(SIGNUP, authAPI.signUp);
const loginSaga = createRequestSaga(LOGIN, authAPI.login);
const profileSaga = createRequestSaga(PROFILE, authAPI.authGet);
export function* authSaga() {
  yield takeLatest(SIGNUP, signUpSaga);
  yield takeLatest(LOGIN, loginSaga);
  yield takeLatest(PROFILE, profileSaga);
}

const initialState = {
  signUp: {
    userId: "",
    userName: "",
    password: "",
    passwordConfirm: "",
    gender: "",
    birth: "",
    address: "",
    email: "",
    tel: "",
  },
  login: {
    userId: "",
    password: "",
  },
  profile: {
    userName: "",
    gender: "",
    birth: "",
    address: "",
    email: "",
    tel: "",
  },
  auth: null,
  authError: null,
};

const auth = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
      produce(state, (draft) => {
        draft[form][key] = value;
      }),
    [INITIALIZE_FORM]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
    }),

    // 회원가입 성공
    [SIGNUP_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
      authError: null,
      auth,
    }),
    // 회원가입 실패
    [SIGNUP_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),
    // 로그인 성공
    [LOGIN_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
      authError: null,
      auth,
    }),
    // 로그인 실패
    [LOGIN_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),
  },
  initialState
);

export default auth;
