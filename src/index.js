import _tool from "fp-dom-tool";
import "./style.scss";

const alertContainer = (alerTtype) =>
  _tool._createElement("div")([
    "class",
    `_message__container _message--${alerTtype}`,
  ]);

const alertMessage = _tool._createElementContent("p")([
  "class",
  "_message__text",
]);

const compose = (alertContainer, alertMessage) => (alerTtype) => (content) => {
  return _tool._appendElement(alertContainer(alerTtype))(alertMessage(content));
};

const _alert = compose(alertContainer, alertMessage);
const _alertDanger = alert("danger");
const _alertSuccess = alert("success");
const _alertWarning = alert("warning");
const _messageContainer = _tool._getElementClass("_message");
const _switchAlertDisplay = _tool._switchElementDisplay(messageEl);

module.exports = {
  _alert,
  _alertDanger,
  _alertSuccess,
  _alertWarning,
  _messageContainer,
  _switchAlertDisplay,
};
