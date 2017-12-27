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
    graphql
} = require('graphql');

const ViewerType = require('./_viewerType');
const ScalarDate = require('./_scalarDate');
const User = require('./users');
const Order = require('./orders');

const UserList = new GraphQLObjectType({
    name: 'Users',
    fields: () => ({
        users: {
            type: new GraphQLList(User),
            args: {
                id: {
                    type: new GraphQLNonNull(GraphQLString)
                }
            }
        }
    })
});

module.exports = new GraphQLObjectType({
    name: 'Query',
    fields: {
        timestamp: {
            description: 'Hora del servidor',
            type: ScalarDate,
            resolve: () => new Date()
        },
        viewer: {
            type: UserList
        }
    }
});