import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  history: [],
};

const historySlice = createSlice({
  name: 'historySlice',
  initialState,
  reducers: {
    resetHistorySlice: state => {
      state.loading = false;
      state.history = [];
    },
    startLoading: state => {
      state.loading = true;
    },
    endLoading: state => {
      state.loading = false;
    },
    updateHistory: (state, action) => {
      state.history = action.payload;
    },
  },
});

//Action Methods
export const {resetHistorySlice, startLoading, endLoading, updateHistory} =
  historySlice.actions;

//Get States
export const getQRHistory = state => state.historySlice.history;

export const getLoadingState = state => state.historySlice.loading;

export default historySlice.reducer;
