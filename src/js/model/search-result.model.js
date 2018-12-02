import { newsApiFactory } from '../factory/news-api.factory';

export class SearchResultModel {
    constructor() {
        this.getResult = newsApiFactory('GET');
    }

    getSearchResults(channel, recordCount) {
        return this.getResult.execute(channel, recordCount)
            .then(response => response.json())
            .then(result => result.articles);
    }
}