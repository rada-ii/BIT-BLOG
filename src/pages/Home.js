// import React from "react";
// import Post from "../components/Post";
// import { useState, useEffect } from "react";

// function Home() {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then((response) => response.json())
//       .then((data) => setPosts(data.slice(0, 4)));
//   }, []);

//   return (
//     <div className="whole-con">
//       <main className="container">
//         <h2 className="main-title">POSTS</h2>

//         {posts.map((post, index) => (
//           <Post
//             key={post.id}
//             title={`${post.title} ${index + 1}`}
//             body={post.body}
//           />
//         ))}
//       </main>
//     </div>
//   );
// }

// export default Home;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=4")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="whole-con">
      <main className="container">
        <h2 className="main-title">POSTS</h2>
        {posts.map((post, index) => (
          <div key={post.id} className="post-item">
            <h3 className="post-title">
              Title:
              <Link
                to={`/post/${post.id}`}
                title={` ${index + 1}. ${post.title}`}
              >
                {` ${index + 1}. ${post.title}`}
              </Link>
            </h3>
            <p className="post-text">{post.body}</p>
            <hr />
          </div>
        ))}
      </main>
    </div>
  );
}

export default Home;
