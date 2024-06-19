import React from 'react'
import {useNavigate} from 'react-router-dom'
function HeaderItem({name,url}) {
  const Navigate=useNavigate();
  return (
    <>
    <h1 onClick={()=>Navigate(url)}>{name}</h1>
    </>
  )
}

export default HeaderItem