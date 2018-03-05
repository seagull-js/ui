import React from 'react'
import PropTypes from 'prop-types'
import { Text } from './Text'

const style = {
  border: '2px dotted #d2d278',
  background: '#fffdb4',
  padding: '0px 10px',
  margin: '15px 0',
  color: 'black',
}

const Alert = ({ title, children }) => (
  <div style={style}>
    <Text lead>
      <strong>{title}</strong>
    </Text>
    <Text>{children}</Text>
  </div>
)

Alert.propTypes = {
  /** text or child element. shall not contain block-style elements */
  children: PropTypes.node.isRequired,
  /** title text with bold fontsetting */
  title: PropTypes.string.isRequired,
}

export { Alert }
