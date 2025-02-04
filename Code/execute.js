import { addElements } from "/Code/addElementC.js";
import { createElement } from "/Code/createElement.js";
import { addElComponent } from "/Code/componentElement.js";
import { creationElements } from "/Func_main/main.js";

export function executeCode() {
  const containerConfig = creationElements.addElements.global[0];
  const containerElement = createElement(...containerConfig);
  document.body.appendChild(containerElement);

  // addElCom({ addElements: { global: creationElements.addElements.global.slice(1) } }, containerElement);

  const div = creationElements.addElements.global[1];
  const div_cont = createElement(...div);
  containerElement.appendChild(div_cont);

  const paragraph = creationElements.addElements.global[2];
  const paragraphCreation = createElement(...paragraph);
  div_cont.appendChild(paragraphCreation);
}
