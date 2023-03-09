import React from "react";

function Inputs({ value, func }) {
  return (
    <>
      <input value={value} onChange={func} />
    </>
  );
}

export default Inputs;
