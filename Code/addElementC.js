export function addElements(
  type,
  attributes = {},
  text = "",
  events = {},
) {
  const element = document.createElement(type);

  for (const [attrib, value] of Object.entries(attributes)) {
    element.setAttribute(attrib, value);
  }

  if (typeof text === "string") {
    element.textContent = text;
  } else if (text instanceof HTMLElement) {
    element.appendChild(text);
  } else if (Array.isArray(text)) {
    text.forEach((child) => {
      if (child instanceof HTMLElement) {
        element.appendChild(child);
      }
    });
  }

  for (const [event, handler] of Object.entries(events)) {
    element.addEventListener(event, handler);
  }
  return element;
}
