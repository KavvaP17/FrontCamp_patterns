export class SearchResultModel {
    constructor() {
        this.apiKey = '5682c3e724464abcbc6f267ef4ec3389';
        this.url = 'https://newsapi.org/v2/everything?';
    }

    getSearchUrl(channel, recordCount) {
        return `${this.url}sources=${channel}&pageSize=${recordCount}&apiKey=${this.apiKey}`;
    }

    getSearchResults(channel, recordCount) {
        const url = this.getSearchUrl(channel, recordCount);
        return fetch(url)
            .then(response => response.json())
            .then(result => result.articles);
    }
}