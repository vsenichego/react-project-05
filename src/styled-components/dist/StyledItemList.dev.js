"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledItemList = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    list-style: none;\n    margin: 0 0 0 0;\n    padding: 0 0 0 0;\n\n  li {\n    margin: 10px 10px 80px 10px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledItemList = _styledComponents["default"].ul(_templateObject());

exports.StyledItemList = StyledItemList;