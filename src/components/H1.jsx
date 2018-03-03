import React from 'react'
import PropTypes from 'prop-types'

const H1 = ({ children }) => <h1>{children}</h1>

H1.propTypes = {
  /** text or child element. shall not contain block-style elements */
  children: PropTypes.node.isRequired,
}

export { H1 }
