import React from "react";
import { data } from "../../../data";
const UseStateArray = () => {
   const [list, setList] = React.useState(data);
   const deleteThis = (deleteDataKey) => {
      setList(list.filter((data) => data.id !== deleteDataKey));
   };
   return (
      <>
         {list.map((data) => (
            <div className="item" key={data.id}>
               <h3> {data.name} </h3>
               <button onClick={() => deleteThis(data.id)}>Remove Me</button>
            </div>
         ))}
         <button className="btn" onClick={() => setList([])}>
            Clear
         </button>
      </>
   );
};

export default UseStateArray;
