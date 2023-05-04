export declare type TSignUp = {
  username :string; 
  password :string
}

export declare type TSignIn = {
  username : string; 
  password : string;
}

export default {
  SIGNUP_START : "SIGNUP_START",
  SIGNUP_SUCCESS : "SIGNUP_SUCCESS",
  SIGNUP_FAILURE : "SIGNUP_FAILURE",

  SIGNIN_START : "SIGNIN_START",
  SIGNIN_SUCCESS : "SIGNIN_SUCCESS",
  SIGNIN_FAILURE : "SIGNIN_FAILURE",
}