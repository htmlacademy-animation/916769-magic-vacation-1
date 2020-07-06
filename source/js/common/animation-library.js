export const moveRight = (elements) => {
  let duration = 1.5;
  // debugger;
  elements.forEach((element, i) => {
    if (i % 2 === 0) {
      duration = 1;
    }

    element.style.marginRight = `-20px`;
    element.style.opacity = `0`;
    element.style.transitionDuration = `${duration}s`;
    element.style.marginRight = `0`;
    element.style.opacity = `1`;
  });
};
