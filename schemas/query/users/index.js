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
const Order = require('../orders');


const Gender = new GraphQLEnumType({
    name: 'Gender',
    values: {
        FEMALE: { value: 'FEMALE' },
        MALE: { value: 'MALE' },
        OTHER: { value: 'OTHER' }
    }
});

const Birthday = new GraphQLObjectType({
    name: 'Birthday',
    fields: {
        day: {
            type: GraphQLInt
        },
        month: {
            type: GraphQLInt
        },
        year: {
            type: GraphQLInt
        }
    }
});

const User = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        adminID: {
            type: GraphQLString
        },
        timestamp: {
            type: ScalarDate
        },
        firstName: {
            type: GraphQLString
        },
        lastName: {
            type: GraphQLString
        },
        fullName: {
            type: GraphQLString
        },
        email: {
            type: GraphQLString
        },
        password: {
            type: GraphQLString
        },
        phone: {
            type: GraphQLString
        },
        gender: {
            type: Gender
        },
        ageRange: {
            type: GraphQLString
        },
        birthday: {
            type: Birthday
        },
        orders: {
            type: Order
        }
    })
});

module.exports = User