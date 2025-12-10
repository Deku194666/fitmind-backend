"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var API_URL = process.env.REACT_APP_API_URL.replace('localhost', window.location.hostname); // Crear instancia de Axios

var api = _axios["default"].create({
  baseURL: API_URL
}); // Interceptor para añadir automáticamente el user-id a cada request


api.interceptors.request.use(function (config) {
  var userId = localStorage.getItem('usuario_id');

  if (userId) {
    config.headers['user-id'] = userId;
  }

  return config;
}, function (error) {
  return Promise.reject(error);
});
var _default = api;
exports["default"] = _default;