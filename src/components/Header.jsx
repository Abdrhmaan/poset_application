import React from 'react'

const Header = ({user,setuser}) => {
  return (
    <div>
      <span>welcom {user}</span>
    
      <button onClick={()=>setuser("") }>log out</button>
      </div>
  )
}

export default Header