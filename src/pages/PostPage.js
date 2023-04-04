// import React, { useState, useEffect } from "react";
// import { useParams, Link } from "react-router-dom";

// function PostPage() {
//   const { postId } = useParams();
//   const [post, setPost] = useState(null);
//   const [authorPosts, setAuthorPosts] = useState([]);

//   useEffect(() => {
//     fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
//       .then((response) => response.json())
//       .then((data) => setPost(data));

//     fetch(
//       `https://jsonplaceholder.typicode.com/posts?userId=${post?.userId}&_limit=3`
//     )
//       .then((response) => response.json())
//       .then((data) => setAuthorPosts(data));
//   }, [postId, post?.userId]);

//   if (!post) return <div>Loading...</div>;

//   return (
//     <div className="container-post">
//       <Link className="back" to="/">
//         Back
//       </Link>
//       <h2 className="link-title">{`${post.title} ${post.id}`}</h2>
//       <h3 className="link-title">
//         <Link to={`/author/${post.userId}`}>Author: {post.userId}</Link>
//       </h3>
//       <p className="post-body">{post.body}</p>
//       <hr />
//       <h4 className="title-author">3 more posts from same author:</h4>
//       <ul className="list-author">
//         {authorPosts.map((post, index) => (
//           <li className="item-list" key={post.id}>
//             <Link to={`/post/${post.id}`}>{`${post.title} ${index + 1}`}</Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default PostPage;

// import React, { useState, useEffect } from "react";
// import { useParams, Link } from "react-router-dom";

// function PostPage() {
//   const { postId } = useParams();
//   const [post, setPost] = useState(null);
//   const [authorPosts, setAuthorPosts] = useState([]);

//   useEffect(() => {
//     fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
//       .then((response) => response.json())
//       .then((data) => {
//         setPost(data);
//         fetch(
//           `https://jsonplaceholder.typicode.com/posts?userId=${data.userId}&_limit=3`
//         )
//           .then((response) => response.json())
//           .then((data) => setAuthorPosts(data));
//       });
//   }, [postId]);

//   if (!post) return <div>Loading...</div>;

//   return (
//     <div>
//       <Link className="back" to="/">Back</Link>
//       <h1>{post.title}</h1>
//       <h3>Author: {post.userId}</h3>
//       <p>{post.body}</p>
//       <h4>Other posts by author:</h4>
//       <ul>
//         {authorPosts.map((post) => (
//           <li key={post.id}>
//             <Link to={`/post/${post.id}`}>{post.title}</Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default PostPage;

import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function PostPage() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [authorPosts, setAuthorPosts] = useState([]);
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => response.json())
      .then((data) => {
        setPost(data);
        fetch(`https://jsonplaceholder.typicode.com/users/${data.userId}`)
          .then((response) => response.json())
          .then((data) => setAuthor(data));
        fetch(
          `https://jsonplaceholder.typicode.com/posts?userId=${data.userId}&_limit=3`
        )
          .then((response) => response.json())
          .then((data) => setAuthorPosts(data));
      });
  }, [postId]);

  if (!post || !author) return <div>Loading...</div>;

  return (
    <div className="container-post">
      <Link className="back" to="/">
        Back
      </Link>
      <h2 className="link-title">Title: {post.title}</h2>
      <h3 className="link-title">
        Author name:
        <Link to={`/author/${author.id}`}>{` ${author.name}`}</Link>
      </h3>
      <p className="post-body">{post.body}</p>
      <hr />
      <h4 className="title-author">3 more posts from same author:</h4>
      <ul className="list-author">
        {authorPosts.map((post) => (
          <li className="item-list" key={post.id}>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostPage;
