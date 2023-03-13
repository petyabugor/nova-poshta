import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const apiKey = '580c856ea51f60fb314b58ae09b7276b';
const url = 'https://api.novaposhta.ua/v2.0/json/';

export const fetchparcel = createAsyncThunk(
   'parcel/fetchParcelStatus',
   async (valueButtonClick) => {
      console.log(valueButtonClick);
      const { data } = await fetch(url, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({
            apiKey: apiKey,
            modelName: 'TrackingDocument',
            calledMethod: 'getStatusDocuments',
            methodProperties: {
               Documents: [
                  {
                     DocumentNumber: valueButtonClick,
                  },
               ],
            },
         }),
      }).then((response) => response.json());
      return data;
   },
);

const initialState = {
   statusParcel: [],
   isLoading: 'loading',
};

const parcelSlice = createSlice({
   name: 'parcel',
   initialState,
   reducers: {
      setStatusParcel(state, actions) {
         state.statusParcel = actions.payload;
      },
   },
   extraReducers: {
      [fetchparcel.pending]: (state, action) => {
         state.isLoading = 'loading';
         state.statusParcel = [];
      },
      [fetchparcel.fulfilled]: (state, action) => {
         state.statusParcel = action.payload;
         state.isLoading = 'success';
      },
      [fetchparcel.rejected]: (state, action) => {
         state.isLoading = 'error';
         state.statusParcel = [];
      },
   },
});

export const { setStatusParcel } = parcelSlice.actions;

export default parcelSlice.reducer;
