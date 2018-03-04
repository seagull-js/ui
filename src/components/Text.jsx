import React from 'react'
import PropTypes from 'prop-types'

const style = {
  fontFamily: 'Tahoma, Geneva, sans-serif',
  fontSize: 14,
  lineHeight: 1.5,
}

const styleInverse = {
  color: 'white',
  fontFamily: 'Tahoma, Geneva, sans-serif',
  textShadow: '0px 0px 1px #000',
  fontSize: 14,
  lineHeight: 1.5,
}

const Text = ({ inverse, children }) => (
  <div style={{}}>
    <p style={inverse ? styleInverse : style}>{children}</p>
  </div>
)

Text.propTypes = {
  /** text or child element. shall not contain block-style elements */
  children: PropTypes.node.isRequired,
  /** if enabled, renders white font. useful for dark/colored backgrounds */
  inverse: PropTypes.bool,
}

export { Text }
