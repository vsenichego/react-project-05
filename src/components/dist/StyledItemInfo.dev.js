"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledItemInfo = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    margin-left: 10px;\n\n    h2 {\n        font-size: 30px;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledItemInfo = _styledComponents["default"].div(_templateObject());

exports.StyledItemInfo = StyledItemInfo;