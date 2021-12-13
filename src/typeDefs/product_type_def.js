const { gql } = require('apollo-server');

const productTypeDef = gql`
    type Product {
        productId: Int!
        productName: String!
        productDescription: String!
        isProductInStock: Boolean
        sellerId: Int!
        sellerName: String!
        quantity: Int!
        adminId: Int
        date: String        
    }

    type updateProduct{
        productId: Int!
        productName: String!
        productDescription: String!
        isProductInStock: Boolean
        sellerId: Int!
        sellerName: String!
        quantity: Int!
        adminId: Int
        date: String  
    }

    input newProductInput {
        productId: Int!
        productName: String!
        productDescription: String!
        isProductInStock: Boolean
        sellerId: Int!
        sellerName: String!
        quantity: Int!
        adminId: Int
        date: String  
    }

    input updateProductInput {
        productId: Int!
        productName: String!
        productDescription: String!
        isProductInStock: Boolean
        sellerId: Int!
        sellerName: String!
        quantity: Int!
        adminId: Int
        date: String  
    }

    """type Order {
        orderId: Int!
        customerId: Int!
        orderTotalPrice: Int!
        orderDate: String
        sellerId: Int
    }

    input newOrderInput {
        orderId: Int!
        customerId: Int!
        orderTotalPrice: Int!
        productList:[Product]
        orderDate:String
        sellerId: Int
    }
    """

    type Query {
        getProductByProductId(productId: Int!): Product        
        getAllProducts: [Product]
        #getOrderByOrderId(orderId: Int!): Order        
        #getAllOrder: [Order]          
    }

    type Mutation {
        createProduct(newProduct: newProductInput): Product
        deleteProductByProductId(productId: Int!): Message
        updateProductByProductId(productId: Int!, updateProduct: updateProductInput): updateProduct
        #createOrder(newOrder: newOrderInput): Order
        #deleteOrderByOrderId(orderId: Int!): Message  
    }

`;

module.exports = productTypeDef;