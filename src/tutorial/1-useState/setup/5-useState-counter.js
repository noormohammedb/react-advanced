import React, { useState } from "react";

const UseStateCounter = () => {
   const [value, setValue] = useState(0);
   const lateChange = (functionType) => {
      setTimeout(() => {
         //  setValue(value + functionType);
         setValue((prev) => {
            return prev + 1;
         });
      }, 500);
   };
   return (
      <>
         <h3>{value}</h3>
         <button className="btn" onClick={() => setValue(value - 1)}>
            decrement
         </button>
         <button className="btn" onClick={() => setValue(0)}>
            reset
         </button>
         <button className="btn" onClick={() => setValue(value + 1)}>
            increment
         </button>
         <div>
            <h3 style={{ marginTop: "3rem" }}>Slow Buttons</h3>
            <h3>{value}</h3>
            <button className="btn" onClick={() => lateChange(-1)}>
               decrement
            </button>
            <button className="btn" onClick={() => lateChange(+1)}>
               increment
            </button>
         </div>
      </>
   );
};

export default UseStateCounter;
