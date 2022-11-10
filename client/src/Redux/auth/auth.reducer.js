import {
  AUTH_LOGIN_LOADING,
  AUTH_LOGIN_ERROR,
  AUTH_LOGIN_SUCCESS,

} from "./auth.types";

let token = localStorage.getItem("token") || "";
let isAuth = localStorage.getItem("isAuth") || false;
const initialState = {
  token: "",
  loading: false,
  error: false,
  isAuth : false
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case AUTH_LOGIN_LOADING: {
      return {
        ...state,
        loading: true,
        isAuth : false
      };
    }
    case AUTH_LOGIN_ERROR: {
      return {
        ...state,
        loading: false,
        isAuth : false,
        error: true,
      };
    }
    case AUTH_LOGIN_SUCCESS: {
      localStorage.setItem("token", payload.token);
      localStorage.setItem("isAuth", true);
      return {
        ...state,
        loading: false,
        error: false,
        isAuth : true,
        token: payload.token,
      };
    }

    default: {
      return state;
    }
  }
};
