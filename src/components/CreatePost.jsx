import React, { useContext } from 'react'
import { useState } from 'react'
import { useRef } from 'react'

import { Usercontex } from '../App'
import { Postcontex } from '../App'
const CreatePost = ({setpost,posts, user,}) => {

  const state

  
   = useContext(Postcontex)
  const {dispach
  } = useContext(Postcontex)
  console.log(state)
  const imgref = useRef()
  const [contente , setcontente]  = useState("")
  const [img , setimg]  = useState(null)

  function handlesubmit(event){
    event.preventDefault()
    const newposte = {contente,img,user,id:Date.now()}
    console.log(newposte)
    dispach({type : "NEW_Post" , payload : newposte})
 
  
 
    imgref.current.value =""

    setcontente("")

  }


  return (
    <div>
      
    <form onSubmit={handlesubmit}>
      <h1>create Poste</h1>
      <input type='text'  onChange={(e) => setcontente(e.target.value)} value={contente}/>
      <input type='file' onChange={(e) => setimg(e.target.files[0])} ref={imgref}/>
      <button>submit</button>
    </form>
  
      
      
      
      </div>
  )
}

export default CreatePost