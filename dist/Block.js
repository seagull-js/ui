'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Block = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactGridSystem = require('react-grid-system');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var background = 'linear-gradient(350deg,  #0d6abe 0%,#a1bee8 50%,#c99eca 100%)';

var inverseCss = {
  background: background,
  color: 'white'
};

var Block = function Block(_ref) {
  var inverse = _ref.inverse,
      children = _ref.children;
  return _react2.default.createElement(
    'div',
    { style: inverse ? inverseCss : {} },
    _react2.default.createElement(
      _reactGridSystem.Container,
      null,
      children
    )
  );
};

Block.propTypes = {
  /** is like normal bootstrap container or filled with gradient */
  inverse: _propTypes2.default.bool,
  /** text or child element. shall not contain block-style elements */
  children: _propTypes2.default.node.isRequired
};

Block.defaultProps = {
  background: 'transparent'
};

exports.Block = Block;