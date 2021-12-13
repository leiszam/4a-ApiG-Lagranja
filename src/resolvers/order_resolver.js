const orderResolver = {

    Query:{        
        getAllOrder: async (_, __,  {dataSources}) => {
            return await dataSources.orderAPI.getAllOrder();
        },

        getOrderByOrderId: async  (_, {orderId}, {dataSources})=>{              
            return await  dataSources.orderAPI.getOrderByOrderId(orderId);
        }        
    },

    Mutation:{
        createOrder: async (_, {newOrder},{dataSources}) => {
            return await dataSources.orderAPI.createOrder(newOrder);
        },
        
        deleteOrderByOrderId: async (_, {orderId} , {dataSources}) =>{
            return await dataSources.orderAPI.deleteOrderByOrderId(orderId);
        },
       
    }
    
} 

module.exports = orderResolver;