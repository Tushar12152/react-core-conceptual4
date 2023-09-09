import React from "react";


const Card=({title,view})=>{
    console.log()
    return(
        <>


<div class="card w-96 bg-base-100 shadow-xl">
<div class="card-body">
<h2 class="card-title">{title}</h2>
{/* <figure><img src="https://i.ibb.co/L1b6xSq/shape.jpg" alt="" /></figure> */}
<figure><img src="./image/shape.jpg" alt="" /></figure>
<h1>{view}</h1>
   
  </div>
</div>
           
        </>
    )
}

export default Card;