const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig = require('../server');

class AccountAPI extends RESTDataSource{

    constructor(){
        super();
        this.baseURL = serverConfig.auth_api_url;

    }

    async accountById(id){
        return await  this.get(`/usuario/usuario/${id}`)
        
    }

    async accountAll(){
        return await  this.get("/usuario/usuario/")
        
    }

     async authRequest(credentials){
       return await this.post(`/rest-auth/login/`,credentials);
    }

    async userRegister(credentials){
        return await this.post(`rest-auth/registration/`,credentials);
    }

    async deleteUserById(id){
        return await this.delete(`/usuario/usuario/${id}/`);
    }

    async UpdateUser(id,credentials){
        return await this.put(`/usuario/usuario/${id}/`,credentials);
    }

    async UserToken(){
        return await this.get(`/usuario/user/`);
    }

    
    
}

module.exports = AccountAPI;