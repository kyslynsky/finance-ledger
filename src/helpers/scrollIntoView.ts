export const scrollIntoViewWithOffset = (selector: string, offset: number): void => {
  const targetElement = document.querySelector(selector);
  if (targetElement) {
    const targetTop = targetElement.getBoundingClientRect().top;
    const bodyTop = document.body.getBoundingClientRect().top;
    window.scrollTo({
      behavior: "smooth",
      top: targetTop - bodyTop - offset,
    });
  }
};
