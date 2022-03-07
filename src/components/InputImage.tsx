import { useState } from 'react'
import { useDropzone, FileWithPath, FileError, FileRejection, DropEvent } from 'react-dropzone'
import { useTranslation } from 'react-i18next'

import './InputImage.css'

enum DragStatus {
  NONE = 'da-none',
  DROP = 'da-drop',
  DROP_ACCEPTED = 'da-drop-accepted',
  DROP_REJECTED = 'da-drop-rejected',
  DRAGGING = ' da-dragging',
}

export function InputImage () {
  const { t } = useTranslation()
  const [dragStatus, setDragStatus] = useState(DragStatus.NONE)

  function handleDrop<T extends File>(acceptedFiles: T[], fileRejections: FileRejection[], event: DropEvent) {
    console.log(acceptedFiles)
    console.log(fileRejections)
    console.log(event)
  }
  function handleDropAccepted<T extends File>(acceptedFiles: T[], event: DropEvent) {
    setDragStatus(DragStatus.DROP_ACCEPTED)
    console.log(acceptedFiles)
    console.log(event)
  }
  function handleDropRejected(fileRejections: FileRejection[], event: DropEvent) {
    setDragStatus(DragStatus.DROP_REJECTED)
    console.log(fileRejections)
    console.log(event)
  }
  function handleDragEvents (a: any) {
    console.log()
    if (a._reactName === 'onDragOver' || a._reactName === 'onDragEnter') {
      setDragStatus(DragStatus.DRAGGING)
    } else if (a._reactName === 'onDragLeave') {
      setDragStatus(DragStatus.NONE)
    }
  }

  const {
    acceptedFiles,
    fileRejections,
    getRootProps,
    getInputProps,
  } = useDropzone({
    accept:         process.env.REACT_APP_ACCEPTED_FILE_TYPES,
    maxFiles:       1,
    multiple:       false,
    onDrop:         handleDrop,
    onDragEnter:    handleDragEvents,
    onDragLeave:    handleDragEvents,
    onDragOver:     handleDragEvents,
    onDropAccepted: handleDropAccepted,
    onDropRejected: handleDropRejected,
  })

  const acceptedFileItems = acceptedFiles.map((file: FileWithPath) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ))

  const fileRejectionItems = fileRejections.map(({ file, errors }: { file: FileWithPath, errors: FileError[]}) => (
    <li key={file.path}>
      {file.path} - {file.type} - {file.size} bytes
      <ul>
        {errors.map(e => (
          <li key={e.code}>{e.message}</li>
        ))}
      </ul>
    </li>
  ))

  return (
    <section className="upload-container">
      <div {...getRootProps({ className: 'dropzone-area ' + dragStatus })}>
        <input {...getInputProps()} />
        <p dangerouslySetInnerHTML={{ __html: `${t('formFileChoose')} ${t('formFileDragNDrop')}` }}/>
        <em dangerouslySetInnerHTML={{ __html: t('formFileHelp', { size: '100', max: '10' }) }}/>
        <p>{dragStatus}</p>
      </div>
      <aside>
        <h4>Accepted files</h4>
        <ul>{acceptedFileItems}</ul>
        <h4>Rejected files</h4>
        <ul>{fileRejectionItems}</ul>
      </aside>
    </section>
  )
}