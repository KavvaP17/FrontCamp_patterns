import { newsApiFactory } from '../factory/news-api.factory';

export class SearchResultModel {
    constructor() {
        this.getResult = newsApiFactory('GET');

        // Proxy
        this.executeProxy = new Proxy(this.getResult.execute, {
            apply: function (target, thisArg, argumentsList) {
                console.log(`GET request with parameters: ${argumentsList}`);
                return target.apply(thisArg, argumentsList);
            }
        })
    }

    getSearchResults(channel, recordCount) {
        return this.executeProxy(channel, recordCount)
            .then(response => response.json())
            .then(result => result.articles);
    }
}

