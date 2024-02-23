import axios from "axios";
import {
  setLoading,
  setError,
  setErrorMsg,
  setUser
} from "../authentication/index";

import { PostMethod } from "../../../axiosAPI/axiosRequest";

export const loginFunction = (userData, navigate) => async (dispatch) => {

  dispatch(setLoading(true));

  PostMethod('/login', userData).then(
    (response) => {
      localStorage.setItem('user', JSON.stringify(response.user));
      localStorage.setItem('token', response.token);

      dispatch(setErrorMsg(""));
      dispatch(setUser(response.user));
      dispatch(setLoading(false));

      navigate('/about');
    }
  ).catch((err) => {
    dispatch(setError(true));
    dispatch(setLoading(false));

    if(err?.response?.data?.message) {
      dispatch(setErrorMsg(err.response.data.message));
    }
  })

};