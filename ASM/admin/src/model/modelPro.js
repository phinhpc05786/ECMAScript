export class productService {
    static async fetchData(url){
        try {
            const response = await axios.get(url);
            return response.data;
        } catch (e) {
            console.log(e);
            throw e;
        }

    }

    static async addData(data){
        try {
            await axios.post('http://localhost:3000/products/', data);
            console.log("Thành công");
        } catch (e) {
            console.log(e);
            throw e;
        }
    }

    static async deleteData(id){
        try {
            await axios.delete(`http://localhost:3000/products/${id}`);
            console.log("Thành công");
        } catch (e) {
            console.log(e);
            throw e;
        }
    }

    static async  getDataById(id){
        try {
            const response = await axios.get(`http://localhost:3000/products/${id}`);
            return response.data;
        } catch (e) {
            console.log(e);
            throw e;
        }
    }

    static async updateCase(id,data){
        try {
            await axios.put(`http://localhost:3000/products/${id}`, data);
        } catch (e) {
            console.log(e);
            throw e;
        }
    }

}