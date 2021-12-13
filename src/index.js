const {ApolloServer} = require('apollo-server');
const AccountAPI = require('./dataSources/account_api');
const ProductAPI = require('./dataSources/product_api');
const OrderAPI = require('./dataSources/order_api');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const authentication = require('./utils/authentication');



const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: ()=>({
        accountAPI: new AccountAPI(),
        productAPI: new ProductAPI(),
        orderAPI: new OrderAPI()
    }),
    introspection:true,
    playground:true

});

server.listen(process.env.PORT || 4000).then(({url}) => {
    console.log(`🚀 Server ready at ${url}`);
})
