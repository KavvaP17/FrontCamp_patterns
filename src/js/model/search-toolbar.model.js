export class SearchToolbarModel {
    constructor() {

        this.channels = [
            {
                label: 'ABC NEWS',
                value: 'abc-news'
            },
            {
                label: 'BBC NEWS',
                value: 'bbc-news'
            },
            {
                label: 'BBC SPORT',
                value: 'bbc-sport'
            },
            {
                label: 'FOX NEWS',
                value: 'fox-news'
            },
            {
                label: 'FOX SPORTS',
                value: 'fox-sports'
            },
            {
                label: 'GOOGLE NEWS',
                value: 'google-news'
            },
        ];


        this.recordsCount = [
            {
                label: '1',
                value: 1
            },
            {
                label: '5',
                value: 5
            },
            {
                label: '10',
                value: 10
            },
            {
                label: '15',
                value: 15
            },
            {
                label: '20',
                value: 20
            },
            {
                label: '50',
                value: 50
            },
        ];
    }

    getChannels() {
        return this.channels;
    }

    getRecordsCount() {
        return this.recordsCount;
    }

    getChanelByIndex(index) {
        return this.channels[index];
    }

    getRecordsCountByIndex(index) {
        return this.recordsCount[index];
    }
}

