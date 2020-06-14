import React from 'react'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'

export const NoMatchedRoute = function () {
  const { t } = useTranslation()
  console.log('here');

  // useEffect(() => {
  //   getItems()
  // }, [])

  // const getItems = () => {
  //   Api.all((items) => {
  //     if (items) {
  //       items.forEach(item => {
  //         item.desc = Api.decodeHTML(item.desc)
  //       })
  //       setItems(items)
  //     }
  //   })
  // }

  return (
    <React.Fragment>
      <Helmet>
        <meta name='Description' content={t('download.notFound.metaFileNotFound')} />
      </Helmet>
      <div className="card">
        <h1>
          {t('download.notFound.title')}
        </h1>
      </div>
    </React.Fragment>
  )
}
