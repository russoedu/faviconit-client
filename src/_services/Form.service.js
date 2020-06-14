const imageTypesNames = process.env.REACT_APP_IMAGE_FORMATS_NAMES
const minImageSize = Number(process.env.REACT_APP_IMAGE_MIN_IMAGE_SIZE)
const maxFileSize = process.env.REACT_APP_IMAGE_MAX_MB_SIZE

export class FormService {
  static async validateImageSize (imgRef) {
    const width = imgRef.current.naturalWidth
    const height = imgRef.current.naturalHeight
    if (width < minImageSize || height < minImageSize) {
      throw new Error('minimumSize')
    } else if (width !== height) {
      throw new Error('notSquared')
    } else {
      return (true)
    }
  }

  /**
   * Returns an AlertAction depending on the type of the error
   * @param {object} error The error with an error type
   * @param {string} label The field label
   * @returns {Object} and AlertActions error object
   * @property {string} message Alert text
   * @property {Object} params Alert params
   */
  static async getImageErrorAlert (error, label) {
    let message = ''
    let params = null

    switch (error.type) {
      case 'maxSizeExceeded':
        message = 'validation.max_file'
        params = [{ key: 'attribute', value: label }, { key: 'max', value: maxFileSize }]
        break
      case 'unsupportedFileType':
        message = 'validation.image'
        params = [{ key: 'attribute', value: 'home.form.file.title' }, { key: 'types', value: imageTypesNames }]
        break
      case 'minimumSize':
        message = 'validation.minimum_size_image'
        params = [{ key: 'size', value: minImageSize }]
        break
      case 'notSquared':
        message = 'validation.squared_image'
        params = [{ key: 'attribute', value: label }, { key: 'size', value: minImageSize }]
        break
      case 'multipleNotAllowed':
        message = 'home.form.file.multiDragError'
        break
      default:
        break
    }

    return { message, params }
  }

  static validateInput (content, validation) {
    const regEx = RegExp(validation)
    return regEx.test(content)
  }
}
