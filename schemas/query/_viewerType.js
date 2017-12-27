const { GraphQLEnumType } = require('graphql');
module.exports = new GraphQLEnumType({
    name: 'ViewerType',
    values: {
        BUYER: { value: 'BUYER' },
        SELLER: { value: 'SELLER' },
        ADMIN: { value: 'ADMIN' }
    }
});