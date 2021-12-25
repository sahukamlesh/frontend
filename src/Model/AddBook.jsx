import {gql} from '@apollo/client'
const ADD_BOOK = gql`
  mutation AddBook(
    $title: String!
    $synopsis: String!
    $authorName: String!
    $authorEmail: String!
  ) {
    addBook(
      book: {
        title: $title
        author: { name: $authorName, email: $authorEmail }
        synopsis: $synopsis
      }
    ) {
      id
      title
      synopsis
      author {
        name
        email
      }
    }
  }
`;
export default ADD_BOOK