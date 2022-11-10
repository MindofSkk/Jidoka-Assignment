import axios from "axios";
import{
    AUTH_LOGIN_LOADING,
    AUTH_LOGIN_ERROR,
    AUTH_LOGIN_SUCCESS,


} from "./auth.types";

 export const loginAPI = (creds)=> async(dispatch)=>{
    dispatch({type:AUTH_LOGIN_LOADING});
    try{
 let response= await  axios.post("http://localhost:8080/user/login", creds)
 dispatch({
    type:AUTH_LOGIN_SUCCESS,

  payload:  response.data,

 });
    
}catch(e) {
        console.log(e);
        dispatch({
            type:AUTH_LOGIN_ERROR,   
         });
    };

};

