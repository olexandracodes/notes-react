import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AnyAction>;

export default store;
