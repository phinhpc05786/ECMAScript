console.log('-----------Bài 5----------------');

class APICaller {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }

    async get(endpoint) {
        const response = await axios.get(`${this.baseURL}/${endpoint}`);
        return response.data; 
    }
}

class Post extends APICaller {
    constructor() {
        super('http://localhost:3000');
        this.endpoint = "products";
    }

    async getAll() {
        return this.get(this.endpoint); 
    }

    async getOne(postId) {
        return super.get(`${this.endpoint}/${postId}`);
    }
}

const apiCaller = new Post();

async function fetchData() {
    const allPosts = await apiCaller.getAll();
    console.log( allPosts);

    const postId = 4; 
    const onePost = await apiCaller.getOne(postId);
    console.log(onePost);

}

fetchData();
