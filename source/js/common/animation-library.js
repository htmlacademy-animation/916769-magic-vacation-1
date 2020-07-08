export const moveLeftAndShow = (elements, show = true) => {
  elements.forEach((element) => {
    if (show) {
      element.style.transform = `translateX(0)`;
      element.style.opacity = `1`;
    } else {
      element.style.transform = `translateX(40px)`;
      element.style.opacity = `0`;
    }
  });
};
