export default class Modal {
  constructor(btnModalOpen, modalContainer, btnModalClose, keyDown) {
    this.btnModalOpen = document.querySelector(btnModalOpen);
    this.modalContainer = document.querySelector(modalContainer);
    this.btnModalClose = document.querySelector(btnModalClose);
    this.keyDown = keyDown;

    this.toggleModal = this.toggleModal.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  toggleModal() {
    if (!this.btnModalOpen.classList.contains('disabled')) {
      this.modalContainer.classList.toggle('active');
    }
  }

  handleKeyDown(event) {
    if (event.key === this.keyDown) {
      this.modalContainer.classList.remove('active');
    }
  }

  addModalEvent() {
    this.btnModalOpen.addEventListener('click', this.toggleModal);
    this.btnModalClose.addEventListener('click', this.toggleModal);
    document.addEventListener('keydown', this.handleKeyDown);
  }

  init() {
    if (this.btnModalOpen && this.modalContainer) {
      this.addModalEvent();
    }
    return this;
  }
}
