let instance = null;

// Singleton
export class ErrorPopupView {
    constructor() {
        if (!instance) {
            this.popup = document.querySelector('#popup');
            this.popupMsg = document.querySelector('#popup-msg');
            this.popupCloseBtn = document.querySelector('#close-popup-btn');
            
            this.init();

            instance = this;
        } else {
            return instance;
        }
    }

    init() {
        this.popup.addEventListener('click', this.clickHandler.bind(this));
    }

    clickHandler(event) {
        if (event.target === this.popupCloseBtn || event.target === this.popup) {
            this.closePopup();
        }
    }

    showErrorPopup(msg) {
        this.popupMsg.innerHTML = '';
        const msgContainer = document.createElement('div');
        msgContainer.innerHTML = msg;
        this.popupMsg.appendChild(msgContainer);
        this.popup.classList.remove('hidden');
    }

    closePopup() {
        this.popup.classList.add('hidden');
    }

}