export function createElement(tag, attributes, textContent, events) {
    const element = document.createElement(tag);
  
    for (const key in attributes) {
      element.setAttribute(key, attributes[key]);
    }
  
    if (textContent) {
      element.textContent = textContent;
    }
  
    for (const event in events) {
      element.addEventListener(event, events[event]);
    }
  
    return element;
  }