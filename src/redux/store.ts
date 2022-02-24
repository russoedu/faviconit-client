import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import languageReducer from './languageReducer'

export const store = configureStore({
  reducer: {
    language: languageReducer,
  },
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
