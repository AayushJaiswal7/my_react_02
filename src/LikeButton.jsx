import { useState } from "react";
export default function LikeButton(){
   let [isLiked,setIsLiked]=useState(false)
   let [click,setClick]=useState(0)

   let toggleLike=()=>{
      setIsLiked(! isLiked) 
      setClick(click+1)     
   }
   let styles={"color":"red"}
   
   return(
      <div >
         <p onClick={toggleLike} >

            {(isLiked)?<i className="fa-solid fa-heart" style={styles}></i>:<i className="fa-regular fa-heart"></i>}
            </p>
            <p>{click}</p>
      </div>

   );
}