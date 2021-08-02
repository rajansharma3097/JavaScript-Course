export class Modal {

  constructor(contentId, fallbackText) {
    this.fallbackText = fallbackText;
    this.contentTemplateEl = document.getElementById(contentId);
    this.modalTemplateEl = document.getElementById('modal-template');
  }

  show() {
    if ('content' in document.createElement('template')) {
      const modalElements = document.importNode(this.modalTemplateEl.content, true);
      this.modalEl = modalElements.querySelector('.modal');
      this.backdropEl = modalElements.querySelector('.backdrop');

      const contentElement = document.importNode(this.contentTemplateEl.content, true);

      this.modalEl.appendChild(contentElement);

      document.body.insertAdjacentElement('afterbegin', this.modalEl);
      document.body.insertAdjacentElement('afterbegin', this.backdropEl);
    } else {
      // Fallback code
      alert(this.fallbackText);
    }
  }

  hide() {
    if (this.modalEl) {
      document.body.removeChild(this.modalEl);
      document.body.removeChild(this.backdropEl);
      this.modalEl = null;
      this.backdropEl = null;
    }
  }
}