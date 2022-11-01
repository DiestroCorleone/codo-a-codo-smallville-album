import React from "react";

export default function Footer() {
  const showYear = () => {
    const year = new Date().getFullYear();
    return year;
  };
  return (
    <footer className="padded back-tertiary">
      <small>
        Developed with &#9829; by{" "}
        <a
          href="https://www.github.com/diestrocorleone"
          target="_blank"
          title="GitHub Diestro Corleone"
          rel="noreferrer"
        >
          Diestro Corleone
        </a>{" "}
        - <span id="year">{showYear()}</span>
      </small>
    </footer>
  );
}
