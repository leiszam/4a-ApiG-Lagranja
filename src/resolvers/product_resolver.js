const productResolver = {

    Query:{        
        getAllProducts: async (_, __,  {dataSources}) => {
            return await dataSources.productAPI.getAllProducts();
        },

        getProductByProductId: async  (_, {productId}, {dataSources})=>{              
            return await  dataSources.productAPI.getProductByProductId(productId);
        }        
    },

    Mutation:{
        createProduct: async (_, {newProduct},{dataSources}) => {
            return await dataSources.productAPI.createProduct(newProduct);
        },
        
        deleteProductByProductId: async (_, {productId} , {dataSources}) =>{
            return await dataSources.productAPI.deleteProductByProductId(productId);
        },

        updateProductByProductId: async (_, {productId, updatedProduct}, {dataSources}) =>{
            return await dataSources.productAPI.updateProductByProductId(productId, updatedProduct);
        }
    }
    
} 

module.exports = productResolver;