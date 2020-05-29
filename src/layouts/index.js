import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import CookieConsent from 'react-cookie-consent';

// Components
import ContextProvider from '~/provider/ContextProvider'
import Header from '../components/Header/Header.component';
import Footer from '../components/Footer/Footer.component';

// Styles
import './layout.scss';

const Layout = ({ children }) => {
  return (
    <ContextProvider>
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <CookieConsent
              location="bottom"
              buttonText="Accept"
              declineButtonText="Decline"
              cookieName="gatsby-gdpr-google-analytics">
              This site uses cookies. By clicking 'I accept,' you are agreeing to our use of cookies.
            </CookieConsent>
            <Header />
            {/* <Navigation siteTitle={data.site.siteMetadata.title} /> */}
            {children}
            <Footer />
          </>
        )}
      />
    </ContextProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
