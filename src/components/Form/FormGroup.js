import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'

import './FormGroup.css'

export function FormGroup (props) {
  const language = useSelector(state => state.language)
  const [resultAlert, setResultAlert] = useState(null)
  const { t } = useTranslation()
  const label = `home.form.${props.id}.title`
  const help = `home.form.${props.id}.help`
  const helpParams = props.helpParams

  FormGroup.propTypes = {
    // props: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    children: PropTypes.any.isRequired,
    helpParams: PropTypes.object,
    invalid: PropTypes.object
  }

  useEffect(() => {
    if (props.invalid && props.invalid.message) {
      if (!props.invalid.params) {
        setResultAlert(t(props.invalid.message))
      } else {
        const params = {}
        props.invalid.params.forEach(param => {
          params[param.key] = t(param.value)
        })
        setResultAlert(t(props.invalid.message, params))
      }
    } else {
      setResultAlert(null)
    }
  }, [props.invalid, t])

  return (
    <div className="form-group row">
      <label
        className={'col-sm-3 col-form-label' + language.selected.dirClass}
        htmlFor={props.id}
        id={props.id + 'Label'}
      >
        {t(label)}
      </label>
      <div className="col-sm-9 col-form-input">

        {props.children}

        <small
          id={props.id + 'Help'}
          className="form-text text-muted"
          dangerouslySetInnerHTML={{ __html: t(help, helpParams) }}
        >
        </small>
        <div className="validation-feedback">
          <div className="invalid-feedback" dangerouslySetInnerHTML={{ __html: resultAlert }}>
          </div>
        </div>
      </div>
    </div>
  )
}
