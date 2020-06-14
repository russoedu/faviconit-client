import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

import './SubmitButton.css'

export function SubmitButton ({ formValid }) {
  const language = useSelector(state => state.language)
  const [formValidClass, setFormValidClass] = useState(' disabled')

  SubmitButton.propTypes = {
    formValid: PropTypes.bool.isRequired
  }

  useEffect(() => {
    if (formValid) {
      setFormValidClass('')
    } else {
      setFormValidClass(' disabled')
    }
  }, [formValid, setFormValidClass])

  return (
    <button
      type="submit"
      id="faviconit"
      className={'btn btn-outline-primary btn-lg' + formValidClass + language.selected.dirClass}
      aria-disabled={!formValid}
      disabled={!formValid}
    >
      <span className="brand">favicon<span className="orange">it!</span></span>
    </button>
  )
}
