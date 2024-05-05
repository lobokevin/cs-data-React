import React from 'react'
import { Link } from 'react-router-dom'

import { Player } from '@lottiefiles/react-lottie-player'
import { Helmet } from 'react-helmet'

import Footer from '../components/footer'
import './item-detail.css'

const ItemDetail = (props) => {
  return (
    <div className="item-detail-container">
      <Helmet>
        <title>Item-Detail - cs-data</title>
        <meta property="og:title" content="Item-Detail - cs-data" />
      </Helmet>
      <div data-role="Header" className="item-detail-navbar-container">
        <div className="item-detail-navbar">
          <div className="item-detail-logo">
            <img
              alt="image"
              src="/default-img.svg"
              className="item-detail-image"
            />
          </div>
          <div className="item-detail-container01">
            <div className="item-detail-links-container">
              <a href="#services" className="item-detail-link Anchor">
                FAQ&apos;S
              </a>
              <Link to="/about" className="item-detail-link1 Anchor">
                About Us
              </Link>
              <span className="item-detail-link2 Anchor">contact</span>
            </div>
          </div>
          <div className="item-detail-cta-container">
            <div data-role="BurgerMenu" className="item-detail-burger-menu">
              <svg viewBox="0 0 1024 1024" className="item-detail-icon">
                <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
              </svg>
            </div>
          </div>
          <div data-role="MobileMenu" className="item-detail-mobile-menu">
            <div className="item-detail-top">
              <img
                alt="image"
                src="/default-img.svg"
                className="item-detail-image1"
              />
              <div
                data-role="CloseMobileMenu"
                className="item-detail-container02"
              >
                <svg viewBox="0 0 1024 1024" className="item-detail-icon02">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <div className="item-detail-mid">
              <div className="item-detail-links-container1">
                <a href="#features" className="item-detail-link3 Anchor">
                  features
                </a>
                <a href="#services" className="item-detail-link4 Anchor">
                  services
                </a>
                <a href="#about-us" className="item-detail-link5 Anchor">
                  About Us
                </a>
                <span className="item-detail-link6 Anchor">contact</span>
              </div>
              <button className="item-detail-cta-btn button Anchor">
                sTART BUILDING
              </button>
            </div>
            <div className="item-detail-bot">
              <div className="item-detail-social-links-container">
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="item-detail-icon04"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="item-detail-icon06"
                >
                  <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="item-detail-icon08"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="item-detail-container03">
        <h1>
          Is &#123;C/C/Z&#125;, &#123;State&#125; the best location for your
          business?
        </h1>
      </div>
      <div className="item-detail-container04">
        <Player
          src="https://lottie.host/6a4754c0-9d63-4bf4-9d1b-912e9885f776/59kUfM7NHR.json"
          speed="1"
          autoplay="true"
          background="transparent"
          className="item-detail-us-animation"
        ></Player>
        <div className="item-detail-container05">
          <div className="item-detail-container06">
            <div className="item-detail-container07">
              <div className="item-detail-container08">
                <h3 className="item-detail-text01">Population</h3>
                <div className="item-detail-container09">
                  <img
                    alt="image"
                    src="/people-together%20(1)-1500w.png"
                    className="item-detail-image2"
                  />
                </div>
                <span>
                  With &#123;Insert Population&#125;, &#123;C/C/Z&#125; is the
                  &#123;nth&#125; most populated &#123;city/county&#125; in
                  &#123;State&#125;
                </span>
              </div>
              <div className="item-detail-container10">
                <h3 className="item-detail-text03">Income</h3>
                <div className="item-detail-container11">
                  <img
                    alt="image"
                    src="/dollar-symbol%20(1)-1500w.png"
                    className="item-detail-image3"
                  />
                </div>
                <span>
                  The Median Income of an average household in &#123;C/C/Z&#125;
                  is $&#123;Insert Median Income&#125; but &#123;Insert
                  Percentage&#125; of them are below the poverty line.
                </span>
              </div>
              <div className="item-detail-container12">
                <h3 className="item-detail-text05">Race &amp; Ethnicity</h3>
                <div className="item-detail-container13">
                  <img
                    alt="image"
                    src="/race-1500w.png"
                    className="item-detail-image4"
                  />
                </div>
                <span>
                  The largest race or ethnic group in &#123;C/C/Z&#125; is
                  &#123;Insert Race&#125; at &#123;Insert Percentage&#125;
                </span>
              </div>
              <div className="item-detail-container14">
                <h3 className="item-detail-text07">Age</h3>
                <div className="item-detail-container15">
                  <img
                    alt="image"
                    src="/age-range-1500w.png"
                    className="item-detail-image5"
                  />
                </div>
                <span>
                  The median age of &#123;C/C/Z&#125; is &#123;Insert Age&#125;
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="item-detail-container16">
        <div className="item-detail-container17">
          <img
            alt="image"
            src="/screen%20shot%202024-04-22%20at%202.09.24%20pm-200h.png"
            className="item-detail-image6"
          />
        </div>
        <div className="item-detail-container18">
          <span>
            Yes, I would like to purchase all data for &#123;C/C/Z&#125; this
            now!
          </span>
          <button className="item-detail-cta-btn1 Anchor button">Cart</button>
        </div>
      </div>
      <div className="item-detail-section-separator"></div>
      <Footer rootClassName="footer-root-class-name3"></Footer>
    </div>
  )
}

export default ItemDetail
