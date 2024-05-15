import { combineReducers } from '@reduxjs/toolkit';
import notesReducer from './slices/notesSlice';
import formReducer from './slices/formSlice';

const rootReducer = combineReducers({
  notes: notesReducer,
  form: formReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
