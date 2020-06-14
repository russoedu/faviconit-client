import React from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'

import './AdvancedFormGroup.css'

export function AdvancedFormGroup (props) {
  const language = useSelector(state => state.language)
  const { t } = useTranslation()
  const [displayAdvanced, setDisplayAdvanced] = props.displayAdvancedState
  const handleColapsed = () => {
    setDisplayAdvanced(!displayAdvanced)
  }

  AdvancedFormGroup.propTypes = {
    children: PropTypes.any.isRequired,
    displayAdvancedState: PropTypes.array.isRequired
  }

  return (
    <div className="card" id="advanced-card">
      <div
        role="button"
        tabIndex="3"
        className="card-header button"
        onClick={handleColapsed}
      >
        <span
          className={'advancedColapsed' + language.selected.dirClass}
          aria-hidden={displayAdvanced}
        >
          {t('home.form.advancedAccordionColapsed')}
        </span>
        <span
          className={'advancedExpanded' + language.selected.dirClass}
          aria-hidden={!displayAdvanced}
        >
          {t('home.form.advancedAccordionExpanded')}
        </span>
      </div>
      <div className="card-body collapse" aria-hidden={!displayAdvanced}>

        {props.children}

      </div>
    </div>
  )
}
