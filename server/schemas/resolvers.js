const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const { User } = required('../models');

const resolvers = {
    Query: {
        me: async () => {

        },
        user: async () => {
            return User.findOne({ username })
                .select('-__v -password')
                .populate('savedBooks');
        }
    },
    Mutation: {
        getSingleUser: async () => {

        },
        createUser: async () => {

        },
        login: async () => {

        },
        saveBook: async () => {

        },
        deleteBook: async () => {

        }
    }
};

module.exports = resolvers;