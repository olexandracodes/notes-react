import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
  name: 'form',
  initialState: { title: '', content: '' },
  reducers: {
    setForm: (state, action) => {
      return action.payload;
    },
    clearForm: () => {
      return { title: '', content: '' };
    },
  },
});

export const { setForm, clearForm } = formSlice.actions;
export default formSlice.reducer;
