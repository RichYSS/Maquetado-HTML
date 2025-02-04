export function addElComponent(config, parentElement = document.body) {
    config.addElements.global.forEach((elementConfig) => {
      const [tag, attributes, textContent, events] = elementConfig;
      const element = createElement(tag, attributes, textContent, events);
      parentElement.appendChild(element);
    });
  }