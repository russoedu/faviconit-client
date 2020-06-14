import { languageConstants } from '../_constants'

export function language (state = {}, action) {
  switch (action.type) {
    case languageConstants.SET:
      return {
        list: action.language.list,
        selected: action.language.selected
      }
    case languageConstants.ERROR:
      return {
        language: null,
        error: action.error
      }
    case languageConstants.CLEAR:
      return {}
    default:
      return state
  }
}
