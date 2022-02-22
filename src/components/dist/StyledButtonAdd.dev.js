"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledButtonAdd = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin: 10px;  \n  background-color: var(--primary);\n  color: white;\n  border: 0;\n  padding: 15px 20px;\n  min-width: 150px;\n  font-size: 16px;\n  border-radius: 3px;\n  cursor: pointer;\n  transition: opacity 200ms ease-out;\n  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);\n\n:hover {\n  opacity: 0.8;\n}\n\n:disabled {\n  opacity: 0.4;\n  cursor: disabled;\n}\n\n:active {\n  box-shadow: 0 0px rgba(0, 0, 0, 0.2);\n  transform: translateY(1px);\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledButtonAdd = _styledComponents["default"].input(_templateObject());

exports.StyledButtonAdd = StyledButtonAdd;