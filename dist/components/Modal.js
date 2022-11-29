"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ModalModule = _interopRequireDefault(require("./Modal.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Modal(props) {
  const {
    showModal
  } = props;
  if (!showModal) {
    return false;
  }

  /** 
   * Make sure user not clicked on child element 
   * and the emit close event
   */
  function onClickHandler(event) {
    if (event.target === event.currentTarget) {
      props.onBlur();
    }
  }
  return /*#__PURE__*/React.createElement("div", {
    className: _ModalModule.default.modal,
    onClick: onClickHandler
  }, props.children);
}
var _default = Modal;
exports.default = _default;