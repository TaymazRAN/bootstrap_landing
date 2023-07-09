import React from "react";

const Tamrin = () => {
  function outer() {
    let count = 0;
    function inner() {
      count = count + 1;
      console.log("count", count);
      <p> count </p>;
    }
    return inner;
  }
  const fn = outer();

  return (
    <div>
      {" "}
      {fn()} {fn()} {fn()}{" "}
    </div>
  );
};

export default Tamrin;
