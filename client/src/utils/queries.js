import { gql } from '@apollo/client';

export const GET_ME = gql`
  {
    me {
        _id
        username
        email
        bookCount
        savedBook {
            bookId
            description
            title
            image
            link
            authors {
                name
            }
        }
    }
}`;

