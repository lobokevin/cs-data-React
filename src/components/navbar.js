import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navbar.css'

const Navbar = (props) => {
  return (
    <div className="navbar-navbar">
      <div className="navbar-logo">
        <img
          alt={props.imageAlt}
          src={props.imageSrc}
          className="navbar-image"
        />
      </div>
      <div className="navbar-links-container">
        <span className="navbar-link Anchor">{props.link}</span>
        <Link to="/about" className="navbar-link1 Anchor">
          {props.link1}
        </Link>
        <span className="navbar-link2 Anchor">{props.link2}</span>
      </div>
      <div className="navbar-cta-container">
        <div data-role="BurgerMenu" className="navbar-burger-menu">
          <svg viewBox="0 0 1024 1024" className="navbar-icon">
            <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
          </svg>
        </div>
      </div>
      <div data-role="MobileMenu" className="navbar-mobile-menu">
        <div className="navbar-top">
          <img
            alt={props.imageAlt1}
            src={props.imageSrc1}
            className="navbar-image1"
          />
          <div data-role="CloseMobileMenu" className="navbar-container">
            <svg viewBox="0 0 1024 1024" className="navbar-icon02">
              <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
            </svg>
          </div>
        </div>
        <div className="navbar-mid">
          <div className="navbar-links-container1">
            <a href="#features" className="navbar-link3 Anchor">
              {props.link3}
            </a>
            <span className="navbar-link4 Anchor">{props.link4}</span>
            <a href="#about-us" className="navbar-link5 Anchor">
              {props.link5}
            </a>
            <span className="navbar-link6 Anchor">{props.link6}</span>
          </div>
          <button className="navbar-cta-btn Anchor button">
            {props.ctaBtn}
          </button>
        </div>
        <div className="navbar-bot">
          <div className="navbar-social-links-container">
            <svg viewBox="0 0 950.8571428571428 1024" className="navbar-icon04">
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="navbar-icon06">
              <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="navbar-icon08">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

Navbar.defaultProps = {
  imageAlt: 'image',
  link6: 'contact',
  imageSrc1: '/default-img.svg',
  ctaBtn: 'sTART BUILDING',
  imageSrc: '/default-img.svg',
  link: "FAQ'S",
  link5: 'About Us',
  link1: 'About Us',
  link2: 'contact',
  imageAlt1: 'image',
  link4: 'services',
  link3: 'features',
}

Navbar.propTypes = {
  imageAlt: PropTypes.string,
  link6: PropTypes.string,
  imageSrc1: PropTypes.string,
  ctaBtn: PropTypes.string,
  imageSrc: PropTypes.string,
  link: PropTypes.string,
  link5: PropTypes.string,
  link1: PropTypes.string,
  link2: PropTypes.string,
  imageAlt1: PropTypes.string,
  link4: PropTypes.string,
  link3: PropTypes.string,
}

export default Navbar
