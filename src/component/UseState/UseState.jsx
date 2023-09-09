import React, { useState } from "react";

const UseState=()=>{
    const[count,setCount]=useState(0)
    function handleClick(){
       const newCount=count+1;
        setCount(newCount)
}
const handleClick2=()=>{
    let news=count-1;
    setCount(news)
}
    return (
        <div className="text-center p-5">
            <h1 className="font-bold text center text-4xl py-5">count:{count}</h1>
            <button   onClick={handleClick} className="btn btn-primary mr-3">+</button>
            <button onClick={handleClick2} className="btn btn-secondary">-</button>
            
        </div>
       
    )
}



export default UseState;