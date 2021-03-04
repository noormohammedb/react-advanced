import React, { useState } from "react";

const UseStateObject = () => {
   const [personData, setPData] = useState({
      name: "lorem ipsum",
      age: 44,
      address: "lorem ipsum dollor",
   });
   const clickEvent = () => {
      console.log("Hellow");
      setPData({ ...personData, address: "Hello World" });
   };
   return (
      <>
         <h3>{personData.name}</h3>
         <h3>{personData.age}</h3>
         <h3>{personData.address}</h3>
         <button className="btn" onClick={clickEvent}>
            Click Me
         </button>
      </>
   );
};

export default UseStateObject;
