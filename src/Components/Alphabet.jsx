import { useState } from "react";

const alpha=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const Alphabet=({change})=>{
    let x=0;
    return <>
      <div className="flex items-center justify-center space-x-3 flex-wrap m-4">
        {
            alpha.map((val)=>{
                return <div className="hover:underline hover:text-blue-600" onClick={()=>change(val)} key={x++} >{val}</div>
            })
        }
        </div>
    </>
}
export default Alphabet;
