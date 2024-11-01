// // constants
// import { AuthActionTypes } from "./constants";

// export interface AuthActionType {
//   type:
//     | AuthActionTypes.API_RESPONSE_SUCCESS
//     | AuthActionTypes.API_RESPONSE_ERROR
//     | AuthActionTypes.FORGOT_PASSWORD
//     | AuthActionTypes.FORGOT_PASSWORD_CHANGE
//     | AuthActionTypes.LOGIN_USER
//     | AuthActionTypes.LOGOUT_USER
//     | AuthActionTypes.RESET
//     | AuthActionTypes.SIGNUP_USER;
//   payload: {} | string;
// }

// interface UserData {
//   id: number;
//   username: string;
//   password: string;
//   firstName: string;
//   lastName: string;
//   role: string;
//   token: string;
// }

// // common success
// export const authApiResponseSuccess = (
//   actionType: string,
//   data: UserData | {}
// ): AuthActionType => ({
//   type: AuthActionTypes.API_RESPONSE_SUCCESS,
//   payload: { actionType, data },
// });
// // common error
// export const authApiResponseError = (
//   actionType: string,
//   error: string
// ): AuthActionType => ({
//   type: AuthActionTypes.API_RESPONSE_ERROR,
//   payload: { actionType, error },
// });

// export const loginUser = (
//   username: string,
//   password: string
// ): AuthActionType => ({
//   type: AuthActionTypes.LOGIN_USER,
//   payload: { username, password },
// });

// export const logoutUser = (): AuthActionType => ({
//   type: AuthActionTypes.LOGOUT_USER,
//   payload: {},
// });

// export const signupUser = (
//   fullname: string,
//   email: string,
//   password: string
// ): AuthActionType => ({
//   type: AuthActionTypes.SIGNUP_USER,
//   payload: { fullname, email, password },
// });

// export const forgotPassword = (username: string): AuthActionType => ({
//   type: AuthActionTypes.FORGOT_PASSWORD,
//   payload: { username },
// });

// export const resetAuth = (): AuthActionType => ({
//   type: AuthActionTypes.RESET,
//   payload: {},
// });

// constants
import { AuthActionTypes } from "./constants";
import axios from "axios";

// Define UserData interface
interface UserData {
  id: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  role: string;
  token: string;
}

// Action Type Interface
export interface AuthActionType {
  type:
    | AuthActionTypes.API_RESPONSE_SUCCESS
    | AuthActionTypes.API_RESPONSE_ERROR
    | AuthActionTypes.FORGOT_PASSWORD
    | AuthActionTypes.FORGOT_PASSWORD_CHANGE
    | AuthActionTypes.LOGIN_USER
    | AuthActionTypes.LOGOUT_USER
    | AuthActionTypes.RESET
    | AuthActionTypes.SIGNUP_USER;
  payload: {} | string | { actionType: string; data: UserData | {} | string };
}

// Common success action
export const authApiResponseSuccess = (
  actionType: string,
  data: UserData | {}
): AuthActionType => ({
  type: AuthActionTypes.API_RESPONSE_SUCCESS,
  payload: { actionType, data },
});

// Common error action
export const authApiResponseError = (
  actionType: string,
  error: string
): AuthActionType => ({
  type: AuthActionTypes.API_RESPONSE_ERROR,
  payload: { actionType, error },
});

// Login action
export const loginUser = (
  username: string,
  password: string
): AuthActionType => ({
  type: AuthActionTypes.LOGIN_USER,
  payload: { username, password },
});

// Logout action
export const logoutUser = (): AuthActionType => ({
  type: AuthActionTypes.LOGOUT_USER,
  payload: {},
});

// Signup action (with API call)
export const signupUser = (fullname: string, email: string, password: string) => {
  return async (dispatch: any) => {
    try {
      const response = await axios.post("http://localhost:8080/ecommerce/auth/signup", {
        firstName: fullname.split(' ')[0],
        lastName: fullname.split(' ')[1],
        email,
        password,
      });
      if(response.data.status == true){
        sessionStorage.setItem('authToken',response.data.jwt)

      }else{
        alert('Error in registration')
        return
      }
      
      dispatch(authApiResponseSuccess(AuthActionTypes.SIGNUP_USER, response.data));
    } catch (error) {
      dispatch(authApiResponseError(AuthActionTypes.SIGNUP_USER, "error.response.data"));
    }
  };
};

// Forgot password action
export const forgotPassword = (username: string): AuthActionType => ({
  type: AuthActionTypes.FORGOT_PASSWORD,
  payload: { username },
});

// Reset authentication action
export const resetAuth = (): AuthActionType => ({
  type: AuthActionTypes.RESET,
  payload: {},
});
