import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const apiKey = '580c856ea51f60fb314b58ae09b7276b';
const url = 'https://api.novaposhta.ua/v2.0/json/';
let options = JSON.stringify({
   apiKey: apiKey,
   modelName: 'Address',
   calledMethod: 'getWarehouses',
   methodProperties: {
      Limit: '200',
   },
});

export const fetchOffices = createAsyncThunk('offices/fetchOfficesStatus', async () => {
   const { data } = await fetch(url, {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json',
      },
      body: options,
   }).then((response) => response.json());
   return data;
});

const initialState = {
   offices: [],
   isLoading: 'loading',
};

const officesSlice = createSlice({
   name: 'offices',
   initialState,
   reducers: {
      setOffices(state, actions) {
         state.offices = actions.payload;
      },
   },
   extraReducers: {
      [fetchOffices.pending]: (state, action) => {
         state.isLoading = 'loading';
         state.offices = [];
      },
      [fetchOffices.fulfilled]: (state, action) => {
         state.offices = action.payload;
         state.isLoading = 'success';
      },
      [fetchOffices.rejected]: (state, action) => {
         state.isLoading = 'error';
         state.offices = [];
      },
   },
});

export const { setOffices } = officesSlice.actions;

export default officesSlice.reducer;
