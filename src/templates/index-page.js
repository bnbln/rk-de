import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Banner from '../components/Banner'
import Logo from '../components/Logo'


export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <>
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
    </div>
    <Banner>
        <div className="left">
          <img src={!!image.childImageSharp ? image.childImageSharp.fluid.src : image} alt="" />
        </div>
        <div className="right white">
          <h2>{heading}</h2>
          <p className="lead">{subheading}</p>
          <button variant="secondary">Mehr über uns erfahren</button>
        </div>
      </Banner>
        
  </>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        dachzeile
        title
        lead
        cta01
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        bannerimage {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        cta02
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
