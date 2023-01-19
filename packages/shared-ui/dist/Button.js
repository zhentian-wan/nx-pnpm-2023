"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.Button = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
function Button(props) {
    return (0, jsx_runtime_1.jsx)("button", __assign({ onClick: function () { return props.onClick(); } }, { children: props.children }));
}
exports.Button = Button;
exports["default"] = Button;
