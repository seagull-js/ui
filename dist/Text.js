'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Text = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = {
  fontFamily: 'Tahoma, Geneva, sans-serif',
  fontSize: 14,
  lineHeight: 1.5
};

var styleInverse = {
  color: 'white',
  fontFamily: 'Tahoma, Geneva, sans-serif',
  textShadow: '0px 0px 1px #000',
  fontSize: 14,
  lineHeight: 1.5
};

var Text = function Text(_ref) {
  var inverse = _ref.inverse,
      children = _ref.children;
  return _react2.default.createElement(
    'div',
    { style: {} },
    _react2.default.createElement(
      'p',
      { style: inverse ? styleInverse : style },
      children
    )
  );
};

Text.propTypes = {
  /** text or child element. shall not contain block-style elements */
  children: _propTypes2.default.node.isRequired,
  /** if enabled, renders white font. useful for dark/colored backgrounds */
  inverse: _propTypes2.default.bool
};

exports.Text = Text;