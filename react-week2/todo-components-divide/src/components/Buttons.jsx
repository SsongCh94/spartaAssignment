import React from "react";

function Buttons({ func, styleName, text }) {
  return (
    <>
      <button onClick={func} className={styleName}>
        {text}
      </button>
    </>
  );
}

export default Buttons;
