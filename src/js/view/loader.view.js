export class LoaderView {
    constructor() {
        this.loader = document.querySelector('#loader');
    }

    switchLoader() {
        this.loader.classList.toggle('hidden');
    }
}