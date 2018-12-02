export class SearchToolbarView {
    constructor(searchListener) {
        
        this.chanelsSelect = document.querySelector('#chanels-select');
        this.recordsSelect = document.querySelector('#records-count-select');

        this.searchBtn = document.querySelector('#search-btn');
        this.searchBtn.addEventListener('click', searchListener);
    }

    renderChannelSelect(channels) {
        this.renderSelect(this.chanelsSelect, channels);     
    }
    
    renderRecordsCountSelect(recordsCount) {
        this.renderSelect(this.recordsSelect, recordsCount);
    }

    renderSelect(target, data) {
        const fragment = document.createDocumentFragment();
        data.forEach(item => {
            const option = document.createElement('option');
            option.setAttribute('value', item.value);
            option.appendChild(document.createTextNode(item.label));
            fragment.appendChild(option);
        });
        target.appendChild(fragment);
    }

    getSelectedChannel() {
        return this.chanelsSelect.selectedIndex;
    }

    getSelectedRecordsCount() {
        return this.recordsSelect.selectedIndex;
    }
}