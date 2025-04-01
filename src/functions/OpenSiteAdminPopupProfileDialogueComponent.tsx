class OpenSiteAdminPopupProfileDialogueComponent {
  static readonly instance: number = 100 as number;

  constructor(element: HTMLElement) {
    element.style.width = `min(
        ${OpenSiteAdminPopupProfileDialogueComponent.instance}%,
        ${OpenSiteAdminPopupProfileDialogueComponent.instance}%
    )`;
  }
}

export default OpenSiteAdminPopupProfileDialogueComponent;
