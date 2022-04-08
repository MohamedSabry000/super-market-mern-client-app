import React from "react";
import "./errorfooter.css";
import "bootstrap/dist/css/bootstrap.min.css";
export default function ErrorFooter() {
  const date = new Date().getFullYear();

  return (
    <>
      <footer className="errorfooter">
        <div className="footer-bottom">
          Copyright &copy; {`${date}`} All rights reserved{" "}
        </div>
      </footer>
    </>
  );
}
