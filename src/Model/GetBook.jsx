import {gql} from '@apollo/client'
const GET_BOOKS = gql`
  {
    books {
      title
      author {
        name
        email
      }
      synopsis
    }
  }
`;
export default GET_BOOKS;