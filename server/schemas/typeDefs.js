// import the gql tagged template function
const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {

    }

    type Book {

    }

    type Auth {
        token: ID!
        user: User
    }
`;

// export the typeDefs
module.exports = typeDefs;