/* eslint-disable */
import { createSlice } from '@reduxjs/toolkit';
import { emptyState, loadState, saveState } from '../../configs/local-storage';

const initialState = loadState() || { user: { role: 'guest' }, jwt: null };

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, { payload }) {
      state.user = payload?.user;
      state.token = payload?.token;
      saveState(payload);
    },
    removeUser(state, payload) {
      state.user = null;
      state.token = null;
      emptyState();
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
