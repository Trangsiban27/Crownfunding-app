import { takeLatest } from "redux-saga/effects";
import { authFetchMe, authLogin, authRegister } from "./auth-slice";
import handleAuthRegister, { handleAuthFetchMe } from "./auth-handlers";
import { handleAuthLogin } from "./auth-handlers";

export default function* authSaga() {
  yield takeLatest(authRegister.type, handleAuthRegister);
  yield takeLatest(authLogin.type, handleAuthLogin);
}
