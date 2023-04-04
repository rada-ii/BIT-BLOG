import React from "react";

function Navbar() {
  return (
    <div className="container auth">
      <nav className="nav-con">
        <h1 className="nav-title">BIT BLOG</h1>
        <ul className="list">
          <li className="list-item">
            <a href="/">Home</a>
          </li>
          <li className="list-item">
            <a href="/authors">Authors</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
