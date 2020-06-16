import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

import { FormGroup } from '.'
import { FormService } from '../../_services'
import './Input.css'

export function Input ({ id, inputState, validState, validation }) {
  const { t } = useTranslation()
  const placeholder = `home.form.${id}.placeholder`
  const [inputValue, setInputValue] = inputState
  const [isValid, setValid] = validState
  const invalidText = {
    message: 'validation.regex',
    params: [
      {
        key: 'attribute',
        value: `home.form.${id}.title`
      }
    ]
  }

  Input.propTypes = {
    id: PropTypes.string.isRequired,
    inputState: PropTypes.array.isRequired,
    validState: PropTypes.array.isRequired,
    validation: PropTypes.object.isRequired
  }

  const handleInputChange = (event) => {
    setInputValue(event.target.value)
    setValid(FormService.validateInput(event.target.value, validation))
  }

  return (
    <FormGroup id={id} invalid={invalidText}>
      <input
        id={id}
        name={id}
        type="text"
        className={'form-control form-control' + (isValid ? '' : ' is-invalid')}
        aria-describedby={id + 'Help'}
        value={inputValue}
        onChange={handleInputChange}
        placeholder={t(placeholder)}
      />
    </FormGroup>
  )
}
