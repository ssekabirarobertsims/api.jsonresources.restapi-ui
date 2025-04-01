class CloseSiteAdminPopupProfileDialogueComponent {
  static readonly instance: number = 0 as number;

  constructor(element: HTMLElement) {
    element.style.width = `min(
          ${CloseSiteAdminPopupProfileDialogueComponent.instance}%,
          ${CloseSiteAdminPopupProfileDialogueComponent.instance}%
      )`;
  }
}

export default CloseSiteAdminPopupProfileDialogueComponent;
