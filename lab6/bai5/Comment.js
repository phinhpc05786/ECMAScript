import APICaller from './APICaller.js';

class Comment extends APICaller {
    constructor(baseURL) {
        super(baseURL);
        this.endpoint = 'comments';
    }

    async getAll() {
        return this.get(this.endpoint);
    }

    async getOne(commentId) {
        return this.get(`${this.endpoint}/${commentId}`);
    }

    async push(data) {
        const response = await fetch(`${this.baseURL}/${this.endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error(`API request failed with status: ${response.status}`);
        }

        return response.json();
    }

    async patch(commentId, data) {
        const response = await fetch(`${this.baseURL}/${this.endpoint}/${commentId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error(`API request failed with status: ${response.status}`);
        }

        return response.json();
    }

    async delete(commentId) {
        const response = await fetch(`${this.baseURL}/${this.endpoint}/${commentId}`, {
            method: 'DELETE',
        });

        if (!response.ok) {
            throw new Error(`API request failed with status: ${response.status}`);
        }

        return response.json();
    }

    async create(data) {
        const response = await fetch(`${this.baseURL}/${this.endpoint}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error(`API request failed with status: ${response.status}`);
        }

        return response.json();
    }
}

export default Comment;
