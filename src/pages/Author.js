import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function Author() {
  const { authorId } = useParams();
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${authorId}`)
      .then((response) => response.json())
      .then((data) => setAuthor(data));
  }, [authorId]);

  if (!author) return <div>Loading...</div>;

  return (
    <div className="about">
      <Link className="back" to="/">
        Back
      </Link>
      <div className="author-details">
        <div class="image">
          <img
            src={`https://i.pravatar.cc/150?img=${author.id}`}
            alt={author.name}
          />
        </div>
        <div class="text info">
          <h2 className="name">
            {author.name} {author.lastname}
          </h2>
          <h3>Username: {author.username}</h3>
          <p>Email: {author.email}</p>
          <p>Phone: {author.phone}</p>
        </div>
      </div>

      <hr />
      <div className="author-container">
        <div className="text address">
          <h3>Address:</h3>
          <p>
            street: {author.address.street}, {author.address.suite}
          </p>
          <p>city: {author.address.city}</p>
          <p>zipcode: {author.address.zipcode}</p>
        </div>
        <div className="image">
          <iframe
            title="map"
            width="100%"
            height="100%"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src={`https://maps.google.com/maps?q=${author.address.geo.lat},${author.address.geo.lng}&z=15&output=embed`}
          ></iframe>
        </div>
      </div>
      <div>
        <hr />
        <div className="text company">
          <h3>Company:</h3>
          <p>name: {author.company.name} </p>
          <p> slogan: {author.company.catchPhrase}</p>
        </div>
      </div>
    </div>
  );
}

export default Author;
