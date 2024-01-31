// APICaller.js
class APICaller {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }

    async get(endpoint) {
        const url = `${this.baseURL}/${endpoint}`;
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`API request failed with status: ${response.status}`);
        }

        return response.json();
    }
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = APICaller;
}
