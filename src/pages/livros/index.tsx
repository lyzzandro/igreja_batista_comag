import React, { useEffect, useState } from "react";
import { getAllBooks } from "../../services/crud/books";
import SectionLivros from "./components/SectionLivros";
import "./style.css";

function Livros() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function main() {
      const response = await getAllBooks();
      setBooks(response);
    }
    main();
  }, []);

  return (
    <div className="main livros">
      <div className="container">
        <div className="content">
          <h4 className="bold title">Livros</h4>
          <div className="section-livros">
            {books.map((data) => (
              <SectionLivros {...data} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Livros;
