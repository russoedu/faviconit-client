import axios from 'axios'

const apiUrl = process.env.REACT_APP_API
const fileUploadHeader = {
  headers: {
    'Content-Type': 'multipart/form-data'
  }
}
export class Api {
  static async create (formData) {
    axios.post(apiUrl + 'create', formData, fileUploadHeader)
      .then((result) => {
        console.log(result.data)

        return true
      })
      .catch((error) => {
        console.log(error)
        return new Error(error)
      })
  }

  static get (id, callback) {
    axios.get(apiUrl + id)
      .then((response) => {
        callback(response.data)
      })
      .catch((error) => {
        console.log(error)
        callback(null)
      })
  }
}
