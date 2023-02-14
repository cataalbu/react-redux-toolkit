import { configureStore, createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { counter: 0 },
  reducers: {
    increment(state, action) {
      state.counter += 1;
    },
    decrement(state, action) {
      state.counter -= 1;
    },
    addBy(state, action) {
      state.counter += Number.parseInt(action.payload);
    },
  },
});
export const actions = counterSlice.actions;
export const store = configureStore({
  reducer: counterSlice.reducer,
});
