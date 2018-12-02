import config from '../config/config';

const {apiKey, url} = config;

function getSearchUrl(channel, recordCount) {
    return `${url}sources=${channel}&pageSize=${recordCount}&apiKey=${apiKey}`;
}

export function newsApiFactory(method) {
    switch (method) {
        case 'GET':
            return {
                execute: (channel, recordCount) => {
                    return fetch(getSearchUrl(channel, recordCount));
                }
            }
        case 'POST':
            return {
                execute: (data) => {
                    const options = {
                        method: 'POST', 
                        headers: {
                            'Content-Type': 'application/json; charset=utf-8',
                        },
                        body: JSON.stringify(data)
                    }
                    return fetch(url, options);
                }
            }
        case 'PUT':
            return {
                execute: (data) => {
                    const options = {
                        method: 'PUT', 
                        headers: {
                            'Content-Type': 'application/json; charset=utf-8',
                        },
                        body: JSON.stringify(data)
                    }
                    return fetch(url, options);
                }
            }
        default:
            return{
                execute: () => {
                    console.log('Wrong method!!!');
                }
            }
    }
}