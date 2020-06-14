import React, { useRef, useEffect, useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import Files from 'react-butterfiles'
import 'tui-image-editor/dist/tui-image-editor.css'
// import ImageEditor from '@toast-ui/react-image-editor'

import { FormService } from '../../_services'
import { FormGroup } from '.'

import './InputImage.css'

// import ImageCropper from 'cropperjs'

export function InputImage ({ inputState, validState }) {
  // TODO: Implement an image editor / cropper
  // https://github.com/scaleflex/filerobot-image-editor
  // https://github.com/nhn/tui.image-editor
  // https://github.com/mosch/react-avatar-editor
  // https://github.com/DropsOfSerenity/react-avatar-cropper
  const { t } = useTranslation()
  // const alert = useSelector(state => state.alert)
  const imgRef = useRef()

  const id = 'file'
  const label = `home.form.${id}.title`
  const [file, setFile] = inputState
  const setValid = validState[1]
  const [invalidText, setInvalidText] = useState(null)
  const [displayImage, setDisplayImage] = useState(false)
  const [dragging, setDragging] = useState(false)
  const [draggingClass, setDraggingClass] = useState('')
  const [validClass, setValidClass] = useState('')
  const imageTypes = process.env.REACT_APP_IMAGE_FORMATS.split(',')
  const minImageSize = Number(process.env.REACT_APP_IMAGE_MIN_IMAGE_SIZE)
  const maxFileSize = process.env.REACT_APP_IMAGE_MAX_MB_SIZE

  InputImage.propTypes = {
    inputState: PropTypes.array.isRequired,
    validState: PropTypes.array.isRequired
  }

  const handleSuccess = (data) => {
    setValid(true)
    setDragging(false)
    setFile(data[0])
  }

  const handleErrors = useCallback((errors) => {
    setFile(null)
    setDisplayImage(false)
    setValid(false)
    setDragging(false)

    FormService
      .getImageErrorAlert(errors[0], label)
      .then((alert) => {
        setInvalidText(alert)
        setValidClass(' is-invalid')
      })
  }, [setFile, setDisplayImage, label, setValid])

  useEffect(() => {
    if (dragging) {
      setDraggingClass(' dragging')
    } else {
      setDraggingClass('')
    }
  }, [dragging])

  const handleDrag = () => {
    setDragging(true)
  }

  const handleDragStop = () => {
    setDragging(false)
  }

  useEffect(() => {
    if (imgRef && imgRef.current) {
      FormService
        .validateImageSize(imgRef)
        .then((result) => {
          setValidClass('')
          setDisplayImage(result)
        })
        .catch((error) => {
          handleErrors([{ type: error.message }])
        })
    }
  }, [file, minImageSize, handleErrors])

  const imageUploaded = (browseFiles, getDropZoneProps) => (file &&
    <div
      id="icon-upload"
      className={'image-uploaded' + draggingClass}
      onDrag={handleDrag}
      onDragStart={handleDrag}
      onDragEnter={handleDrag}
      onDragOver={handleDrag}
      onDragLeave={handleDragStop}
      {...getDropZoneProps({})}
    >
      <img
        alt="favicon"
        id="new-favicon"
        src={file.src.base64}
        ref={imgRef}
        style={{ display: displayImage ? 'initial' : 'none' }}
      />
      <div
        className="swap-container"
      >
        <div
          role="button"
          className="btn btn-outline-primary btn-sm ltr"
          onClick={browseFiles}
        >
          {t('home.form.file.swapImage')}
        </div>
        <div dangerouslySetInnerHTML={{ __html: t('home.form.file.dragNDrop') }}></div>
      </div>
    </div>)

  const waitingUpload = (browseFiles, getDropZoneProps) => (!file &&
    <div
      id="icon-upload"
      className={'waiting-upload' + draggingClass + validClass}
      onDrag={handleDrag}
      onDragStart={handleDrag}
      onDragEnter={handleDrag}
      onDragOver={handleDrag}
      onDragLeave={handleDragStop}
      {...getDropZoneProps({})}
    >
      <div
        role="button"
        className="btn btn-outline-primary btn-lg ltr"
        onClick={browseFiles}
      >
        {t('home.form.file.choose')}
      </div>
      <p dangerouslySetInnerHTML={{ __html: t('home.form.file.dragNDrop') }}></p>
    </div>)

  return (
    <Files
      multiple={false}
      accept={imageTypes}
      convertToBase64
      maxSize={maxFileSize + 'MB'}
      onSuccess={handleSuccess}
      onError={handleErrors}
    >
      {({ browseFiles, getDropZoneProps }) => (
        <FormGroup
          id={id}
          helpParams={{ size: minImageSize, max: maxFileSize }}
          invalid={invalidText}
        >
          {waitingUpload(browseFiles, getDropZoneProps)}
          {imageUploaded(browseFiles, getDropZoneProps)}
        </FormGroup>
      )}
    </Files>
  )
}
