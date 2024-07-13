import { call, put } from "redux-saga/effects";
import {
  requestAuthFetchMe,
  requestAuthLogin,
  requestAuthRegister,
} from "./auth-request";
import { toast } from "react-toastify";
import { saveToken } from "../../utils/auth";
import { authUpdateUser } from "./auth-slice";
import { useNavigate } from "react-router-dom";

export default function* handleAuthRegister(action) {
  console.log("action: ", action);

  const { payload } = action;
  try {
    const response = yield call(requestAuthRegister, payload);
    console.log(response.status);
    if (response.status === 201) {
      toast.success("Create new account successfully");
    }
  } catch (error) {
    console.log(error);
  }
}

function* handleAuthLogin(action) {
  const { payload } = action;

  try {
    const response = yield call(requestAuthLogin, payload);

    if (response.data.accessToken && response.data.refreshToken) {
      saveToken(response.data.accessToken, response.data.refreshToken);
      yield call(handleAuthFetchMe, { payload: response.data.accessToken });
    }
  } catch (error) {
    const response = error.response.data;

    if (response.statusCode === 403) {
      toast.error(response.error.message);
      return;
    }
  }
}

function* handleAuthFetchMe(action) {
  const { payload } = action;
  try {
    const response = yield call(requestAuthFetchMe, payload);
    if (response.status === 200) {
      yield put(
        authUpdateUser({
          user: response.data,
          accessToken: payload,
        })
      );
    }
  } catch (error) {
    console.log(error);
  }
}

export { handleAuthLogin, handleAuthFetchMe };
