import React from 'react'

import PropTypes from 'prop-types'

import './demographic-stat-component.css'

const DemographicStatComponent = (props) => {
  return (
    <div
      className={`demographic-stat-component-container ${props.rootClassName} `}
    >
      <h3 className="demographic-stat-component-text">{props.heading}</h3>
      <div className="demographic-stat-component-container1">
        <img
          alt={props.imageAlt}
          src={props.imageSrc}
          className="demographic-stat-component-image"
        />
      </div>
      <span className="">
        With &#123;Dynamic Population&#125;, &#123;City&#125; is the
        &#123;nth&#125; most populus in the state if &#123;State&#125;
      </span>
    </div>
  )
}

DemographicStatComponent.defaultProps = {
  rootClassName: '',
  imageSrc: '/people-together%20(1)-1500w.png',
  text: 'Population: {Dynamic Population}',
  imageAlt: 'image',
  heading: 'Population',
}

DemographicStatComponent.propTypes = {
  rootClassName: PropTypes.string,
  imageSrc: PropTypes.string,
  text: PropTypes.string,
  imageAlt: PropTypes.string,
  heading: PropTypes.string,
}

export default DemographicStatComponent
