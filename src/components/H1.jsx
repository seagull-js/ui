import React from 'react'
import PropTypes from 'prop-types'

const style = {
  backgroundImage: 'linear-gradient(350deg,  #0d6abe 10%,#c99eca 100%)',
  '-webkit-background-clip': 'text',
  '-webkit-text-fill-color': 'transparent',
  fontFamily: 'Tahoma, Geneva, sans-serif',
  marginBottom: 5,
}

const styleInverse = {
  color: 'white',
  fontFamily: 'Tahoma, Geneva, sans-serif',
  marginBottom: 5,
}

const border = {
  borderBottom: '1px solid #0d6abe',
}

const borderInverse = {
  borderBottom: '1px solid white',
}

const H1 = ({ inverse, children }) => (
  <div style={inverse ? borderInverse : border}>
    <h1 style={inverse ? styleInverse : style}>{children}</h1>
  </div>
)

H1.propTypes = {
  /** text or child element. shall not contain block-style elements */
  children: PropTypes.string.isRequired,
  /** if enabled, renders white font. useful for dark/colored backgrounds */
  inverse: PropTypes.bool,
}

export { H1 }
