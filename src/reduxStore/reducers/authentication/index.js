import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: false,
  errorMsg: "",
  user: {},
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    
    setLoading(state, action) {
      state.loading = action.payload;
    },

    setError(state, action) {
      state.error = action.payload;
    },

    setErrorMsg(state, action) {
      state.errorMsg = action.payload;
    },

    setUser(state, action) {
      state.user = action.payload;
    },
  },
});

export default auth.reducer;

export const { setLoading, setError, setErrorMsg, setUser } = auth.actions;