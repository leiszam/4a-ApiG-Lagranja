const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig = require('../server');

class ProductAPI extends RESTDataSource {

    constructor(){
        super();
        this.baseURL = serverConfig.product_api_url;
    }

    async getAllProducts(){
        return await this.get('/products');
    }

    async getProductByProductId(productId){
        return await this.get(`/products/${productId}`);
    }

    async createProduct(newProduct){
        return await this.post('/product', newProduct);
    }

    async deleteProductByProductId(productId){
        return await this.delete(`/products/${productId}`);
    }

}

module.exports = ProductAPI;