import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store'
import i18n from '../i18n/i18n'

export interface LanguageState {
  value: string;
}

const initialState: LanguageState = {
  value: 'en',
}

export const languageSlice = createSlice({
  name:     'language',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    set: (state, action: PayloadAction<string>) => {
      state.value = action.payload
      i18n.changeLanguage(state.value)
    },
  },
})

export const { set } = languageSlice.actions

/*
 * The function below is called a selector and allows us to select a value from
 * the state. Selectors can also be defined inline where they're used instead of
 * in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
 */
export const selectLanguage = (state: RootState) => state.language.value

export default languageSlice.reducer
