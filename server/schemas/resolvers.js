const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const { User } = required('../models');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
              const userData = await User.findOne({ _id: context.user._id })
                .select('-__v -password')
                .populate('savedBooks');
          
              return userData;
            }
          
            throw new AuthenticationError('Not logged in');
        }
    },
    Mutation: {
        addUser: async () => {

        },
        login: async () => {

        },
        saveBook: async () => {

        },
        removeBook: async () => {

        }
    }
};

module.exports = resolvers;