import GET_BOOKS from "../Model/GetBook";
import ADD_BOOK from "../Model/AddBook";
import {useQuery,useMutation} from "@apollo/client";
function Library() {
    let titleInput;
    let authorEmailInput;
    let authorNameInput;
    let synopsisInput;
  
    const { loading, error, data } = useQuery(GET_BOOKS);
  
    const [addBook] = useMutation(ADD_BOOK, {
      update(
        cache,
        {
          data: { addBook }
        }
      ) {
        const { books } = cache.readQuery({ query: GET_BOOKS });
        cache.writeQuery({
          query: GET_BOOKS,
          data: { books: books.concat([addBook]) }
        });
      }
    });
    if (loading) return <p>Loading ...</p>;
    if (error) return <p>Error :(</p>;
  
    return (
      <div className="inputContainer">
        <input
          placeholder="Book Title"
          ref={node => {
            titleInput = node;
          }}
        />
        <input
          placeholder="Book Synopsis"
          ref={node => {
            synopsisInput = node;
          }}
        />
        <input
          placeholder="Author Name"
          ref={node => {
            authorNameInput = node;
          }}
        />
        <input
          placeholder="Auhtor Email"
          ref={node => {
            authorEmailInput = node;
          }}
        />
        <button
          onClick={() =>
            addBook({
              variables: {
                title: titleInput.value,
                authorName: authorNameInput.value,
                authorEmail: authorEmailInput.value,
                synopsis: synopsisInput.value
              }
            })
          }
        >
          Add Book
        </button>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Synopsis</th>
            </tr>
          </thead>
          <tbody>
            {data.books.map((book, idx) => (
              <tr key={idx}>
                <td>{book.title}</td>
                <td>{book.author.name}</td>
                <td>{book.synopsis}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  export default Library