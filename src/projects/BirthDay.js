import React from "react";
import "./BirthDay.css";

function BirthDayList() {
   const [data, setData] = React.useState(birthdayData);
   const remove = (id) => {
      console.log("He");
      setData((prev) => prev.filter((iter) => iter.id !== id));
   };
   return (
      <>
         <div className="container">
            {data.map((data) => (
               <div className="inside" key={data.id}>
                  <img
                     className="pic"
                     src="https://picsum.photos/90/90?random=1"
                     alt="lorem"
                  />
                  <div className="data">
                     <p className="name">{data.name}</p>
                     {/* <p className="age">{data.age ? "age" : data.age}</p> */}
                     {data.age ? (
                        <p className="age"> age: {data.age}</p>
                     ) : (
                        <p className="age"></p>
                     )}
                  </div>
                  <button className="customBtn" onClick={() => remove(data.id)}>
                     Remove
                  </button>
               </div>
            ))}
         </div>
         <button className="btn" onClick={() => setData([])}>
            Remove All
         </button>
         <button className="btn" onClick={() => setData(birthdayData)}>
            Refresh
         </button>
      </>
   );
}

const birthdayData = [
   {
      name: "sasi",
      id: 1,
      age: 30,
   },
   {
      name: "soman",
      id: 2,
      age: 22,
   },
   {
      name: "jsnkj",
      age: 19,
      id: 3,
   },
   {
      name: "dsfjjsn",
      age: 20,
      id: 4,
   },
   {
      name: "jdfssn",
      age: 18,
      id: 5,
   },
];

export default BirthDayList;
