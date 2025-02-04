import { addElements } from "/Code/addElementC.js";
import { createElement } from "/Code/createElement.js";
import { addElComponent } from "/Code/componentElement.js";
import { executeCode } from "/Code/execute.js";

export const creationElements = {
  addElements: {
    global: [
      ["main", { id: "", class: "container_class" }, "", {}],
      ["div", { id: "div_id_container", class: "div_container" }, "", {}],
      ["p", { id: "", class: "title_class_p", }, "Acerca de mi...", {},],
      ["h1", { id: "", class: "title_class_h1", }, "¡Título!", {},],
    ],
  },
};

executeCode();
