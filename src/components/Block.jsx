import React from 'react'
import PropTypes from 'prop-types'
import { Container } from 'react-grid-system'

const background =
  'linear-gradient(350deg,  #0d6abe 0%,#a1bee8 50%,#c99eca 100%)'

const inverseCss = {
  background,
  color: 'white',
}

const Block = ({ inverse, children }) => (
  <div style={inverse ? inverseCss : {}}>
    <Container>{children}</Container>
  </div>
)

Block.propTypes = {
  /** is like normal bootstrap container or filled with gradient */
  inverse: PropTypes.bool,
  /** text or child element. shall not contain block-style elements */
  children: PropTypes.node.isRequired,
}

Block.defaultProps = {
  background: 'transparent',
}

export { Block }
