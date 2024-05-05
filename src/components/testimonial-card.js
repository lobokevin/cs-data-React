import React from 'react'

import PropTypes from 'prop-types'

import './testimonial-card.css'

const TestimonialCard = (props) => {
  return (
    <div
      className={`testimonial-card-testimonial-card ${props.rootClassName} `}
    >
      <div className="testimonial-card-card-heading">
        <div className="testimonial-card-name-and-position">
          <span className="Card-Heading">{props.name}</span>
        </div>
      </div>
      <span className="testimonial-card-text Card-Text">{props.text}</span>
    </div>
  )
}

TestimonialCard.defaultProps = {
  text: 'Thank you for your prompt response to my data questions!',
  position: 'Position',
  name: 'Will E',
  rootClassName: '',
}

TestimonialCard.propTypes = {
  text: PropTypes.string,
  position: PropTypes.string,
  name: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default TestimonialCard
