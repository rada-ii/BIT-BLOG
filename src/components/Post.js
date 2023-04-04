// import React from "react";

// function Post({ title, body }) {
//   return (
//     <div className="post-item">
//       <h3 className="post-title">
//         <a href="#" title={title}>
//           {title}
//         </a>
//       </h3>
//       <p className="post-text">{body}</p>
//       <hr />
//     </div>
//   );
// }

// export default Post;

import React from "react";
import { Link } from "react-router-dom";

function Post({ post }) {
  return (
    <div key={post.id} className="post-item">
      <h3 className="post-title">
        <Link to={`/post/${post.id}`} title={post.title}>
          {post.title}
        </Link>
      </h3>
      <p className="post-text">{post.body}</p>
      <hr />
    </div>
  );
}

export default Post;
