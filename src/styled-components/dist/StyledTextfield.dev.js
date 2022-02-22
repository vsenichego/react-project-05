"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledTextfield = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    input {\n        margin: 10px;\n        padding: 12px 10px;\n        border-radius: 3px;\n        border: 1px solid var(--light-gray);\n        font-size: 16px;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledTextfield = _styledComponents["default"].div(_templateObject());

exports.StyledTextfield = StyledTextfield;