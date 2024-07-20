import { createSlice } from '@reduxjs/toolkit';

export const dataSlice = createSlice({
  name: 'data',
  initialState: {
    value: '',
    newValue:''  },
  reducers: {
    setData: (state, action) => {
      state.value = action.payload;
    },
   
  },
});

export const { setData,setNewData } = dataSlice.actions;

export default dataSlice.reducer;
