console.log("--------Bai3---------");

const fs = require("fs").promises; 
const axios = require("axios");

async function fetchData() {
    try {
        const fileData = await fs.readFile('./db.json', { encoding: 'utf8' });
        console.log('Data loaded from disk:', fileData);

        const url = ''; 
        const response = await axios.get(url);
        console.log('Data downloaded from URL:', response.data);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

fetchData();