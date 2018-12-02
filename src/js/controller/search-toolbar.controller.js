import { SearchToolbarModel } from '../model/search-toolbar.model';
import { SearchToolbarView } from '../view/search-toolbar.view';

import { SearchResultModel } from '../model/search-result.model';
import { SearchResultView } from '../view/search-result.view';

import { LoaderView } from '../view/loader.view';

export class SearchToolbarController {
    constructor() {
        this.searchToolbarView = new SearchToolbarView(this.searchListener.bind(this));
        this.searchToolbarModel = new SearchToolbarModel();

        this.searchResultModel = new SearchResultModel();
        this.searchResultView = new SearchResultView();

        this.loaderView = new LoaderView();
    }

    init() {
        const channels = this.searchToolbarModel.getChannels();
        this.searchToolbarView.renderChannelSelect(channels);

        const recordsCount = this.searchToolbarModel.getRecordsCount();
        this.searchToolbarView.renderRecordsCountSelect(recordsCount);
    }

    searchListener(evt) {
        this.switchLoader();
        const channelIndex = this.searchToolbarView.getSelectedChannel();
        const channel = this.searchToolbarModel.getChanelByIndex(channelIndex).value;
        
        const recordsCountIndex = this.searchToolbarView.getSelectedRecordsCount();
        const recordsCount = this.searchToolbarModel.getRecordsCountByIndex(recordsCountIndex).value;
        
        this.searchResultModel.getSearchResults(channel, recordsCount)
            .then((articles) => {
                if (articles.length === 0) {
                    this.showErrorPopup('No results!');
                } else {
                    this.searchResultView.renderArticles(articles);
                }
            })
            .catch((error) => {
                this.showErrorPopup('Connection Error!');        
            })
            .finally(() => {
                this.switchLoader();
            })
    }

    showErrorPopup(msg) {
        // Lazy Initialization
        import('../view/error-popup.view')
            .then(errorPopupModule => {
                const errorPopup = new errorPopupModule.ErrorPopupView();
                errorPopup.showErrorPopup(msg);
            });
    }

    switchLoader() {
        this.loaderView.switchLoader();
        this.searchResultView.switchLoader();
    }
}