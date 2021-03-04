import React, { useState } from "react";

const UseStateBasics = () => {
   const [text, setText] = useState("Hello");
   const changeText = () => {
      console.log(text);
      if (text === "Hello") {
         setText("World");
      } else {
         setText("Hello");
      }
   };
   return (
      <>
         <h2> {text} </h2>
         <button className="btn" onClick={changeText}>
            click me
         </button>
      </>
   );
};

export default UseStateBasics;
