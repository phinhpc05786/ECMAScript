import APICaller from './APICaller';

class Post extends APICaller {
    constructor(baseURL) {
        super(baseURL);
        this.endpoint = 'posts';
    }

    async getAll() {
        return this.get(this.endpoint);
    }

    async getOne(postId) {
        return this.get(`${this.endpoint}/${postId}`);
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

    async patch(postId, data) {
        const response = await fetch(`${this.baseURL}/${this.endpoint}/${postId}`, {
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

    async delete(postId) {
        const response = await fetch(`${this.baseURL}/${this.endpoint}/${postId}`, {
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

export default Post;
