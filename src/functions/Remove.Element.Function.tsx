const removeElement = (element: HTMLElement): void => {
  try {
    element.style.display = "none";
  } catch (error) {
    (async function (): Promise<unknown> {
      return error;
    })();
  }
};

export default removeElement;
