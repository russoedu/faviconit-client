import { languageConstants } from '../_constants'

export class LanguageActions {
  static set (language) {
    return { type: languageConstants.SET, language }
  }

  static error (error) {
    return { type: languageConstants.ERROR, error }
  }

  static clear () {
    return { type: languageConstants.CLEAR }
  }
}
