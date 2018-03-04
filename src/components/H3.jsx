import React from 'react'
import PropTypes from 'prop-types'

const style = {
  backgroundImage: 'linear-gradient(350deg,  #0d6abe 10%,#c99eca 100%)',
  '-webkit-background-clip': 'text',
  '-webkit-text-fill-color': 'transparent',
  fontFamily: 'Tahoma, Geneva, sans-serif',
  fontSize: 22,
  marginBottom: 5,
}

const styleInverse = {
  color: 'white',
  fontFamily: 'Tahoma, Geneva, sans-serif',
  fontSize: 22,
  marginBottom: 5,
  textShadow: '0px 0px 1px #000',
}

const border = {
  borderBottom: '1px solid #0d6abe',
}

const borderInverse = {
  borderBottom: '1px solid white',
}

const H3 = ({ inverse, children }) => (
  <div style={inverse ? borderInverse : border}>
    <h3 style={inverse ? styleInverse : style}>{children}</h3>
  </div>
)

H3.propTypes = {
  /** text or child element. shall not contain block-style elements */
  children: PropTypes.string.isRequired,
  /** if enabled, renders white font. useful for dark/colored backgrounds */
  inverse: PropTypes.bool,
}

export { H3 }