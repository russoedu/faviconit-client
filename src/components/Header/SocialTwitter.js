import React from 'react'
import { useSelector } from 'react-redux'
import { Helmet } from 'react-helmet'

export function SocialTwitter () {
  const language = useSelector(state => state.language)

  return (
    <React.Fragment>
      {/* Add Twitter Script on the html header */}
      <Helmet>
        <script
          async
          SameSite='None'
          Secure
          charSet='utf-8'
          crossOrigin='anonymous'
          src='https://platform.twitter.com/widgets.js'
          data-lang={language.selected.key}
        >
        </script>
      </Helmet>
      <li className={'nav-item social-button'} id="twitter" role="button" tabIndex="11">
        <a
          className="twitter-share-button"
          href='https://twitter.com/share?ref_src=twsrc%5Etfw'
          data-size='large'
          data-related='twitterapitwitter'
          data-url='http://faviconit.com'
          data-show-count='false'
          data-via='faviconit_'
          data-lang={language.selected.key}
        > </a>
      </li>
    </React.Fragment>
  )
}
