import accountTypes, { TSignIn, TSignUp } from "../types/account.types";

export const signUpAccount = (payload : TSignUp) => ({
  type : accountTypes.SIGNUP_START,
  payload : {data : payload}
})

export const signInAccount = (payload : TSignIn) => ({
  type : accountTypes.SIGNIN_START,
  payload : {data : payload}
})