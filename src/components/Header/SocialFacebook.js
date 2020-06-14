import React from 'react'
import { useSelector } from 'react-redux'
import { Helmet } from 'react-helmet'

export function SocialFacebook () {
  const language = useSelector(state => state.language)

  return (
    <React.Fragment>
      {/* Add Facebook Script on the html header */}
      <Helmet>
        <script
          async
          defer
          SameSite='None'
          Secure
          crossOrigin='anonymous'
          src={`https://connect.facebook.net/${language.selected.social}/sdk.js#xfbml=1&version=v6.0&appId=455722034559896&autoLogAppEvents=1`}>
        </script>
      </Helmet>
      <li className="nav-item social-button" id="facebook" role="button" tabIndex="10">
        <div id='fb-root'>
          <div
            className="fb-like"
            data-href='http://faviconit.com/'
            data-width=''
            data-layout='button_count'
            data-action='like'
            data-size='large'
            data-share='false'
            lang={language.selected.social}
          ></div>
        </div>
      </li>
    </React.Fragment>
  )
}
