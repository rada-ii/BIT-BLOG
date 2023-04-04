import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Authors() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setAuthors(data));
  }, []);

  return (
    <div>
      <h2 className="link-title">Authors ({authors.length})</h2>
      <ul>
        {authors.slice(0, 5).map((author) => (
          <li className="post-title item-list " key={author.id}>
            <Link className="authors" to={`/author/${author.id}`}>
              {`${author.name} (${author.username})`}
            </Link>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Authors;
