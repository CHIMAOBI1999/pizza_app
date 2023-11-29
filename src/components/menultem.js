import React from "react";

function Menultem({ image, name, price }) {
  return (
    <div className="menultem">
      <div
        style={{
          backgroundImage: `url(${image})`,
          width: "300px",
          height: "200px",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        {" "}
      </div>
      <h1> {name} </h1>
      <p> ${price} </p>
    </div>
  );
}

export default Menultem;
