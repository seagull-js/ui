import React from 'react'
import PropTypes from 'prop-types'

const style = lead => ({
  fontFamily: 'Tahoma, Geneva, sans-serif',
  fontSize: lead ? 18 : 14,
  lineHeight: 1.5,
})

const styleInverse = lead => ({
  color: 'white',
  fontFamily: 'Tahoma, Geneva, sans-serif',
  textShadow: '0px 0px 1px #000',
  fontSize: lead ? 18 : 14,
  lineHeight: 1.5,
})

const Text = ({ lead, inverse, children }) => (
  <p style={inverse ? styleInverse(lead) : style(lead)}>{children}</p>
)

Text.propTypes = {
  /** text or child element. shall not contain block-style elements */
  children: PropTypes.node.isRequired,
  /** if enabled, renders white font. useful for dark/colored backgrounds */
  inverse: PropTypes.bool,
  /** if enabled, renders extra large font size */
  lead: PropTypes.bool,
}

export { Text }
