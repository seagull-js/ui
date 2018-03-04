'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.H3 = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = {
  backgroundImage: 'linear-gradient(350deg,  #0d6abe 10%,#c99eca 100%)',
  '-webkit-background-clip': 'text',
  '-webkit-text-fill-color': 'transparent',
  fontFamily: 'Tahoma, Geneva, sans-serif',
  fontSize: 22,
  marginBottom: 5
};

var styleInverse = {
  color: 'white',
  fontFamily: 'Tahoma, Geneva, sans-serif',
  fontSize: 22,
  marginBottom: 5,
  textShadow: '0px 0px 1px #000'
};

var border = {
  borderBottom: '1px solid #0d6abe'
};

var borderInverse = {
  borderBottom: '1px solid white'
};

var H3 = function H3(_ref) {
  var inverse = _ref.inverse,
      children = _ref.children;
  return _react2.default.createElement(
    'div',
    { style: inverse ? borderInverse : border },
    _react2.default.createElement(
      'h3',
      { style: inverse ? styleInverse : style },
      children
    )
  );
};

H3.propTypes = {
  /** text or child element. shall not contain block-style elements */
  children: _propTypes2.default.string.isRequired,
  /** if enabled, renders white font. useful for dark/colored backgrounds */
  inverse: _propTypes2.default.bool
};

exports.H3 = H3;