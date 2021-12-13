const accountResolver = {
    Query:{
        accountById: async (_, {id} , {dataSources, userIdToken}) => {
            if(id == userIdToken.id){
                
                return await dataSources.accountAPI.accountById(id);
            }else{
                return null
            }      
        },
        accountAll: async (_, __,  {dataSources}) => {
            return await dataSources.accountAPI.accountAll();
        },

        getUserByToken: async  (_, __, {dataSources})=>{  
            
            return await  dataSources.accountAPI.UserToken();              
        }       
    },

    Mutation:{
        logIn: async (_, {credentials},{dataSources}) => {
            return await dataSources.accountAPI.authRequest(credentials);
        },
        
        Register: async (_, {credentials} , {dataSources}) =>{
            return await dataSources.accountAPI.userRegister(credentials);
        },

        DeleteUser: async (_, {id}, {dataSources}) =>{
            return await dataSources.accountAPI.deleteUserById(id);
        },

        UpdateUser: async  (_, {id,credentials},{dataSources})=>{
            return await dataSources.accountAPI.UpdateUser(id,credentials);
        }


    }
    
} 

module.exports = accountResolver;