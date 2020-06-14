import React, { Suspense } from 'react'
import { useTranslation } from 'react-i18next'

import { Form } from '../components'

export function Home () {
  const { t } = useTranslation()
  require('../_static/css/home.css')

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="row">
        <div className="col-lg-8 col-sm-12">
          <div className="card" id="description">
            <div className="card-body">
              <h5 className="card-title" dangerouslySetInnerHTML={{ __html: t('home.highlight') }}>
              </h5>
              <p className="card-text">
                {t('home.subHighlight')}
              </p>
            </div>
          </div>
          <Form />
        </div>
      </div>
    </Suspense>
  )
}
