"use strict";

require("core-js/modules/es.object.assign.js");
require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/es.promise.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _reactWebcam = _interopRequireDefault(require("react-webcam"));
var faceapi = _interopRequireWildcard(require("face-api.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const ModalScanFace = props => {
  const {
    style,
    display
  } = props;
  let videoRef = (0, _react.useRef)();
  let _style_myModal = style || {};
  if (display && _style_myModal) {
    if (display === 'block') {
      _style_myModal.opacity = 1;
      _style_myModal.visibility = 'visible';
    } else {
      _style_myModal.opacity = 0;
      _style_myModal.visibility = 'hidden';
    }
  }
  _style_myModal.position = 'fixed';
  _style_myModal.zIndex = '1';
  _style_myModal.paddingTop = '150px';
  _style_myModal.left = '0';
  _style_myModal.top = '0';
  _style_myModal.width = '100%';
  _style_myModal.height = '100%';
  _style_myModal.overflow = 'auto';
  _style_myModal.background = 'rgba(0, 0, 0, 0.4)';
  _style_myModal.transition = '400ms ease';
  _style_myModal.display = 'flex';
  _style_myModal.justifyContent = 'center';
  const loadModels = async () => {
    if (display === 'block') {
      Promise.all([faceapi.nets.tinyFaceDetector.loadFromUri('/models'), faceapi.nets.faceLandmark68Net.loadFromUri('/models'), faceapi.nets.faceRecognitionNet.loadFromUri('/models'), faceapi.nets.faceExpressionNet.loadFromUri('/models')]).then();
    }
  };
  (0, _react.useEffect)(() => {
    loadModels();
  }, []);
  return /*#__PURE__*/_react.default.createElement("div", _extends({
    id: "myModal",
    style: _style_myModal
  }, props), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '150px',
      height: '150px',
      background: '#FFFFFF',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '10px'
    }
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "http://localhost:8081/StoredImage/face-scan.png",
    style: {
      width: '90%',
      height: '90%',
      objectFit: 'cover'
    }
  }), display === 'block' ? /*#__PURE__*/_react.default.createElement(_reactWebcam.default, {
    ref: videoRef,
    style: {
      display: 'none'
    }
  }) : null));
};
var _default = exports.default = ModalScanFace;