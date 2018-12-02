import config from '../config/config';

const {channels, recordsCount} = config;

export class SearchToolbarModel {
    constructor() {
        this.channels = channels;
        this.recordsCount = recordsCount;
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

