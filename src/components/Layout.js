import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Logo from './Logo'
import './all.sass'
import useSiteMetadata from './SiteMetadata'
import { Link, withPrefix } from 'gatsby'

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <div>
      <Helmet>
        <html lang="de" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix('/')}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix('/')}img/og-image.jpg`}
        />
      </Helmet>
      <div className="layout">
      <div className="grid">
        
        <header>

          <Logo />

          <nav>
            <Link className="navbar-item" to="/">
              Home
            </Link>
            <Link className="navbar-item" to="/about">
              Rechtsfragen
            </Link>
            <Link className="navbar-item" to="/about">
              Anwalt
            </Link>
            <Link className="navbar-item" to="/blog">
              Aktuelles
            </Link>
            <Link className="navbar-item" to="/contact">
              Kontakt
            </Link>
          </nav>
        </header>
        <div className="text">
          <div className="hero primary">
            <ul>
                <li>TS</li>
            </ul>
            <h1>Ihr Partner für Versicherungs-, Verkehrs- und Mietrecht</h1>
            <p className="lead">Wir bieten hochqualiative Rechtsberatung in unserer Berliner Kanzlei für Sie</p>
            <button>Kontakt aufnehmen</button>
          </div>
        </div> 
        <div className="image" style={{
            backgroundImage: "url()"
            }}>
        </div>
        </div>

        
      <div>{children}</div>


      <Footer />

      </div>
    </div>
  )
}

export default TemplateWrapper
