const postAPI = new Post('http://localhost:3000');
const commentAPI = new Comment('http://localhost:3000');

async function fetchData() {
    try {
        // Fetch data for posts
        const allPosts = await postAPI.getAll();
        displayResults('All Posts:', allPosts);

        const postId = 1;
        const onePost = await postAPI.getOne(postId);
        displayResults('One Post:', onePost);

        // Fetch data for comments
        const allComments = await commentAPI.getAll();
        displayResults('All Comments:', allComments);

        const commentId = 1;
        const oneComment = await commentAPI.getOne(commentId);
        displayResults('One Comment:', oneComment);

        // Example of pushing a new post
        const newPostData = { title: 'New Post', body: 'This is a new post.' };
        const addedPost = await postAPI.push(newPostData);
        displayResults('Added Post:', addedPost);
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
}

function displayResults(title, data) {
    const container = document.getElementById('results-container');
    const resultDiv = document.createElement('div');
    resultDiv.innerHTML = `<strong>${title}</strong>: ${JSON.stringify(data)}`;
    container.appendChild(resultDiv);
}

fetchData();
