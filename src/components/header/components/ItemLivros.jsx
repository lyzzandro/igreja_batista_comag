import { Link } from "react-router-dom";
import book from "/book.svg";
import { useEffect, useState } from "react";
import { getAllBooks } from "../../../services/crud/books";

function ItemLivros({ arrow }) {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    async function main() {
      const response = await getAllBooks();
      setBooks(response);
    }
    main();
  }, []);
  return (
    <li>
      <a href="#" className="links-header">
        <img src={book} alt="Ícone de livro" className="icones" />
        LIVROS
        <img
          src={arrow}
          alt="Ícone de seta pra baixo"
          className="icones arrow"
        />
      </a>
      <ul className="dropdown">
        {books.map((data, index) => (
          <li key={`book-${index}`}>
            <Link to={data.link} target="_blank">
              {data.name} ({data.auth})
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
}

export default ItemLivros;
