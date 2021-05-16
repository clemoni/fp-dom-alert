import _tool from "fp-dom-tool";
import "./style.scss";

const _alertContainer = (alerTtype) =>
  _tool._createElement("div")([
    "class",
    `_message__container _message--${alerTtype}`,
  ]);

const _alertMessage = _tool._createElementContent("p")([
  "class",
  "_message__text",
]);

const compose = (alertContainer, alertMessage) => (alerTtype) => (content) => {
  return _tool._appendElement(alertContainer(alerTtype))(alertMessage(content));
};

const _alert = compose(_alertContainer, _alertMessage);
const _alertDanger = _alert("danger");
const _alertSuccess = _alert("success");
const _alertWarning = _alert("warning");

const _AlertCss = {
  padding: ".6rem",
  border: "2px solid #000",
  borderRadius: "0.3em",
  fontFamily: "'Montserrat', sans-serif",
  fontSize: "1.1rem",
  margin: "0.3rem 0",
  backgroundColor: "#fff",
  borderColor: "#000",
  color: "#000",
};

const _assignProperty = (cloneAlert) => (newAlert) => (key) => {
  const newProperty = { [key]: newAlert[key] };
  return { ...cloneAlert, ...newProperty };
};

const _composeAlertStyle = (Alert) => (newAlert) => {
  return Object.keys(newAlert).reduce(
    (cloneAlert, key) => {
      return Alert.hasOwnProperty(key)
        ? _assignProperty(cloneAlert)(newAlert)(key)
        : cloneAlert;
    },
    { ...Alert }
  );
};

const _createAlertStyle = _composeAlertStyle(_AlertCss);

const _setStyle = (element) => (newAlertCss) => {
  Object.assign(element.style, newAlertCss);
  return element;
};

const body = _tool._getElement()("body");
const _messageContainer = _tool._createElement("div")(["class", "_message"]);
const appendMessageContainer = _tool._appendElement(_messageContainer);
appendMessageContainer(_alertSuccess("Yes"));
_tool._appendElement(body)(_messageContainer);
const _switchAlertDisplay = _tool._switchElementDisplay(_messageContainer);
_switchAlertDisplay();

const _export = {
  _alert,
  _alertDanger,
  _alertSuccess,
  _alertWarning,
  _createAlertStyle,
  _setStyle,
};

export default _export;
