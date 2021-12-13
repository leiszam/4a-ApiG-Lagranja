const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig = require('../server');


class OrderAPI extends RESTDataSource {

    constructor(){
        super();
        this.baseURL = serverConfig.order_api_url;
    }

    async getAllOrder(){
        return await this.get('/orders');
    }

    async getOrderByOrderId(orderId){
        return await this.get(`/orders/${orderId}`);
    }

    async createOrder(newOrder){
        return await this.post('/order', newOrder);
    }

    async deleteOrderByOrderId(orderId){
        return await this.delete(`/orders/${orderId}`);
    }

    
}

module.exports = OrderAPI;