import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

// Components
import ContextProvider from '~/provider/ContextProvider'
import Header from '../components/Header/Header.component';
import Footer from '../components/Footer/Footer.component';

// Styles
import './layout.css';

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
