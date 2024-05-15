import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FormState {
  title: string;
  content: string;
}

const initialState: FormState = {
  title: '',
  content: '',
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setForm: (state, action: PayloadAction<FormState>) => {
      state.title = action.payload.title;
      state.content = action.payload.content;
    },
    clearForm: () => initialState,
  },
});

export const { setForm, clearForm } = formSlice.actions;
export default formSlice.reducer;
