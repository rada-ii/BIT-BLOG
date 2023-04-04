import React from "react";

function Footer() {
  return (
    <div className="footer">
      <footer>
        {/* <div className="container-foot"> */}
        <p className="foot">
          {" "}
          &copy; BIT Blog {new Date().getFullYear()} By Radmila Ivankovic
        </p>
        {/* </div> */}
      </footer>
    </div>
  );
}

export default Footer;
