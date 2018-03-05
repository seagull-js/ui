import React from 'react'
import PropTypes from 'prop-types'

const background =
  'linear-gradient(350deg,  #0d6abe 0%,#a1bee8 50%,#c99eca 100%)'

const style = {
  padding: 5,
  background,
  color: 'white',
  fontSize: 14,
  textShadow: '0px 0px 1px #000',
}

const styleInverse = {
  padding: 5,
  background: 'white',
  color: 'black',
  fontSize: 14,
}

const Button = ({ children, inverse, onClick }) => (
  <button style={inverse ? styleInverse : style} onclick={onClick}>
    {children}
  </button>
)

Button.propTypes = {
  /** title text with bold fontsetting */
  children: PropTypes.string.isRequired,
  /** click event handler */
  onClick: PropTypes.func,
  /** if enabled, renders white font. useful for dark/colored backgrounds */
  inverse: PropTypes.bool,
}

export { Button }
