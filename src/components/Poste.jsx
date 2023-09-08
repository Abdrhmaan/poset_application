import React from 'react'
import { useContext } from 'react'
import { Usercontex } from '../App'

import { Postcontex } from '../App'

const Poste = ({post,} , id) => {
  const {dispach
  } = useContext(Postcontex)

  const caruser =  useContext(Usercontex)
  console.log(caruser)
   const newuser  = post.user == caruser
   console.log(newuser)
  return (
    <div>
    
    
    <p>{post.contente}</p>
    

    {post.img && <img src={URL.createObjectURL(post.img)} style={{width:40}}/> }
     {post.user &&  <p style={{color : newuser && "red"}}> {post.user}  </p> }
     { newuser && <button onClick={() => dispach({type : "DELETE" , payload : id})}>delete</button> }
    
     
    
    </div>
  )
}

export default Poste