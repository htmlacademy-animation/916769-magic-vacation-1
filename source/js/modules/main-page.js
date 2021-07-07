export default () => {
  let description = document.querySelector(`.intro__message`);
  window.addEventListener(`load`, () => {
    description.style.opacity = `1`;
    description.style.marginBottom = `0`;
  });
};
