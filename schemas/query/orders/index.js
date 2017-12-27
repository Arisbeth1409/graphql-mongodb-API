const {
    GraphQLScalarType,
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLNonNull,
    GraphQLList,
    GraphQLBoolean,
    GraphQLInt,
    GraphQLFloat,
    GraphQLInputObjectType,
    GraphQLEnumType,
    graphql
} = require('graphql');

const ScalarDate = require('../_scalarDate');

const Order = new GraphQLObjectType({
    name: 'Order',
    fields: () => ({
        id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        timestamp: {
            type: ScalarDate
        },
        user: {
            type: require('../users'),
            args: {
                id: {
                    type: new GraphQLNonNull(GraphQLID)
                }
            }
        },
    })
});

module.exports = Order