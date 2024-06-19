import React from 'react'
import HeaderItem from './HeaderItem'
import HeaderIcon from './HeaderIcon'
function Header() {
  return (
    <>
      <div className='flex space-x-3 m-2'>
        {
          HeaderIcon.map((val)=>{
            return<>
            <div className='flex items-center space-x-2'>
            {val.icon}
            <HeaderItem name={val.name} url={val.url} key={val.id}/>
            </div>
            </> 
          })
        }
      </div>
    </>
  )
}

export default Header