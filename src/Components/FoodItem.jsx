import React, { useEffect } from "react";
import {useNavigate} from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'
function FoodItem({name,image,id}) {
 let Navigate=useNavigate();
 useEffect(()=>{
  AOS.init({duration:1000})
 },[])
  return (
    <div className='flex flex-col  items-center space-y-4 bg-[#5BD3C7] md:w-64 h-72  border-2 border-slate-400 hover:shadow-lg hover:shadow-[#5BD3C7] rounded-lg' onClick={()=>Navigate(`/${id}`)} data-aos="zoom-in">
       <h2 className='bg-orange-300 text-center w-64 break-words p-1 text-white font-semibold text-sm'>{name}</h2>
       <img src={image} className='size-52 rounded-sm border-2 border-black m-4'/>
    </div>
  )
}

export default FoodItem