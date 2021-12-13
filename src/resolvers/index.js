const accountResolver = require('./account_resolver');
const productResolver = require('./product_resolver');
const orderResolver = require('./order_resolver');

const lodash = require('lodash');

const resolvers = lodash.merge(accountResolver, productResolver,orderResolver);

module.exports =resolvers;