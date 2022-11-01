import React from "react";

export default function Card({
  id = "id",
  img = "No image",
  name = "No name",
  alterEgo = "No Alter Ego",
  actor = "No actor",
  isChrome = "No data",
}) {
  return (
    <article
      className="flex flex-column between rounded-soft box-shadow padded col-third"
      style={
        isChrome
          ? { backgroundImage: "linear-gradient(to right, gainsboro, gray)" }
          : { backgroundColor: "lightyellow" }
      }
    >
      <h3>{name}</h3>
      <br />
      <div style={{ maxHeight: "70vh" }} className="over-hidden">
        <img src={img} className="col-full cover" alt={`Character ${name}`} />
      </div>
      <br />
      <p>{alterEgo}</p>
      <small>{actor}</small>
    </article>
  );
}
