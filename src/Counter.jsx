import { useState } from "react";

function init(){
   console.log("Init was executed");
   
   return Math.random()
}
export default function Counter() {
   let [count, setCount] = useState(init);
   console.log("component was re-rendered");
   


   let incCount = () => {
      setCount((prevCount) => {
         return prevCount+1
      });
      
      // setCount(25)
      // console.log(`count is ${count}`);


   };
   return (
      <div>
         <button onClick={incCount}>Count is {count}</button>
      </div>
   );
}