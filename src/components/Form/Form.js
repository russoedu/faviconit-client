/* eslint-disable no-useless-escape */
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { InputImage, Input, AdvancedFormGroup, SubmitButton } from '.'
import { Api } from '../../_services'

import './Form.css'

export function Form () {
  const { t } = useTranslation()
  const language = useSelector(state => state.language)

  const displayAdvancedState = useState(false)
  const displayAdvanced = displayAdvancedState[0]

  const fileState = useState(null)
  const file = fileState[0]
  const validFileState = useState(false)
  const validFile = validFileState[0]

  const nameState = useState('')
  const name = nameState[0]
  const validNameState = useState(true)
  const validName = validNameState[0]
  const nameValidation = /^[a-zA-Z0-9\.\-\_\ ]*$/g

  const folderState = useState('')
  const folder = folderState[0]
  const validFolderState = useState(true)
  const validFolder = validFolderState[0]
  const folderValidation = /^[a-zA-Z0-9\/\:\.\-\_]*$/g

  const [formValid, setFormValid] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData()
    if (displayAdvanced) {
      if (name !== '') {
        formData.set('appName', name)
      }
      if (folder !== '') {
        formData.set('faviconFolder', folder)
      }
    }

    formData.set('language', language.selected.key)
    formData.append('faviconFile', file.src.file)

    for (const key of formData.keys()) {
      console.log(key, formData.get(key))
    }
    Api.create(formData)
  }

  useEffect(() => {
    const isValid = validFile && (!displayAdvanced || (validName && validFolder))
    setFormValid(isValid)
  }, [validFile, displayAdvanced, validName, validFolder])

  return (
    <>
      <div className="card">
        <div className="card-header text-center">
          {t('home.form.title')}
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <InputImage inputState={fileState} validState={validFileState}/>
            <AdvancedFormGroup displayAdvancedState={displayAdvancedState}>
              <Input id='name' inputState={nameState} validState={validNameState} validation={nameValidation} placeholder="app"/>
              <Input id='folder' inputState={folderState} validState={validFolderState} validation={folderValidation} placeholder="/static/favicons"/>
            </AdvancedFormGroup>
            <SubmitButton formValid={formValid}/>
          </form>
        </div>
      </div>
    </>
  )
}
