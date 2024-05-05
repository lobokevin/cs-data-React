import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>cs-data</title>
        <meta property="og:title" content="cs-data" />
      </Helmet>
      <div data-role="Header" className="home-navbar-container">
        <Navbar></Navbar>
      </div>
      <div className="home-hero">
        <div className="home-hero-text-container">
          <h1 className="home-heading">US Demographics Data</h1>
          <span className="home-text">
            <span>
              The most accurate and current demographic datasets sourced
              directly from the US Census Bureau saving you hours of time and
              complexity.
            </span>
            <br className="Section-Text"></br>
          </span>
          <button className="home-cta-btn button">Check sample for free</button>
        </div>
        <img
          alt="image"
          src="/onpaste.20230812-155459-1500w.png"
          loading="lazy"
          className="home-image"
        />
        <div>
          <div className="home-container2">
            <Script html={``}></Script>
          </div>
        </div>
      </div>
      <div className="home-section-separator"></div>
      <div id="features" className="home-features">
        <div className="home-heading-container">
          <h2 className="home-text03">Error Free and Validated Data </h2>
          <span className="home-text04 Section-Text">
            Save time and errors by our ready to use Census data for your
            business use case.
          </span>
        </div>
        <div className="home-cards-container">
          <div className="home-feature-card">
            <img
              alt="image"
              src="/united_states_census_bureau_wordmark.svg-200h.png"
              className="home-image1"
            />
            <span className="home-heading1 Card-Heading">Why</span>
            <span className="home-text05 Card-Text">
              Data from the US Census American Community Survey, the quality
            </span>
          </div>
          <div className="home-feature-card1">
            <img
              alt="image"
              src="/microsoft_office_excel_(2019%C3%A2%C2%80%C2%93present).svg-200h.png"
              className="home-image2"
            />
            <span className="home-heading2 Card-Heading">What</span>
            <span className="home-text06">
              <span className="Card-Text">
                Formatted, clean and ready to use Excel
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text08">TM</span>
              <span className="Card-Text">
                {' '}
                or CSV files that are ready to use. We also support other
                formats on request.
              </span>
            </span>
          </div>
          <div className="home-feature-card2">
            <img
              alt="image"
              src="/weightlifting%20icon-200h.jpeg"
              className="home-image3"
            />
            <span className="home-heading3 Card-Heading">How</span>
            <span className="home-text10 Card-Text">
              We do the heavy work of ingesting the Census API data, unifying,
              cleaning and updating it.
            </span>
          </div>
        </div>
      </div>
      <div id="about-us" className="home-about-us">
        <div className="home-heading-container1">
          <h2 className="home-text11">Demographic Data Attributes like - </h2>
          <span className="home-secondary-text Section-Text">
            {' '}
            Explore by State, County, City and Zipcode.
          </span>
          <Link to="/state2-city" className="home-cta-btn1 button">
            View Datasets Now!
          </Link>
        </div>
        <div className="home-text-container">
          <div className="home-container3">
            <span>
              <span>Population</span>
              <br></br>
              <span>Population density</span>
              <br></br>
              <span>Age by categories</span>
              <br></br>
              <span>Median age</span>
              <br></br>
              <span>Sex</span>
              <br></br>
              <span>Race/ethnicity</span>
              <br></br>
              <span>Median income</span>
              <br></br>
              <span>
                Households by income
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </div>
          <div className="home-container4">
            <span>
              <span>Education</span>
              <br></br>
              <span>Households</span>
              <br></br>
              <span>Housing units</span>
              <br></br>
              <span>Median home value</span>
              <br></br>
              <span>Owner or renter</span>
              <br></br>
              <span>Poverty</span>
              <br></br>
              <span>Unemployment</span>
              <br></br>
              <span>Area</span>
            </span>
          </div>
        </div>
        <button className="home-cta-btn2 button Anchor">START BUILDING</button>
      </div>
      <div className="home-section-separator1"></div>
      <div className="home-testimonials">
        <h2 className="home-text44 Section-Heading">
          What are they saying about us?
        </h2>
        <div className="home-cards-container1">
          <div className="home-testimonial-card">
            <div className="home-card-heading">
              <div className="home-name-and-position">
                <span className="Card-Heading">Chris T</span>
              </div>
            </div>
            <span className="home-text45 Card-Text">
              Thank you for your prompt response to my data questions!
            </span>
          </div>
          <div className="home-testimonial-card1">
            <div className="home-card-heading1">
              <div className="home-name-and-position1">
                <span className="Card-Heading">Maria A</span>
              </div>
            </div>
            <span className="home-text46">
              <span className="Card-Text">The Excel </span>
              <span>
                ™ file had all the information that I needed and there was no
                charge for additional data points.
              </span>
            </span>
          </div>
          <div className="home-testimonial-card2">
            <div className="home-card-heading2">
              <div className="home-name-and-position2">
                <span className="Card-Heading">Will E</span>
              </div>
            </div>
            <span className="home-text49">
              The data was clearly attributed and solved for my business
              requirement
            </span>
          </div>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name"></Footer>
    </div>
  )
}

export default Home
