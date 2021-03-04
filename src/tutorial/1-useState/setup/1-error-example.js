import React from "react";

const ErrorExample = () => {
   let text = "Hello World";
   const changeTitleClick = () => {
      console.log(text);
      text = "world hello";
   };
   return (
      <>
         <h2>Random Title</h2>
         <p> {text} </p>
         <button className="btn" onClick={changeTitleClick}>
            Change Title
         </button>
      </>
   );
};

export default ErrorExample;
