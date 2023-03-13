import { configureStore } from '@reduxjs/toolkit';
import offices from './slices/officesSlice';
import parcel from './slices/parcelSlice';

export default configureStore({
   reducer: {
      offices,
      parcel,
   },
});
