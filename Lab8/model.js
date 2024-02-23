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
            await axios.post('https://659403061493b0116069b736.mockapi.io/student/', data);
            console.log("Thành công");
        } catch (e) {
            console.log(e);
            throw e;
        }
    }

    static async deleteData(id){
        try {
            await axios.delete(`https://659403061493b0116069b736.mockapi.io/student/${id}`);
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