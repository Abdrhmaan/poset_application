import React from 'react'
import { useState } from 'react'

const Login = ({setuser}) => {
  const [form , setform] = useState()

  function handlechange(event) {
    event.preventDefault()
    setuser(form)

  }
  return (
  <div>
    <form  onSubmit={handlechange}>
    <input type='text' onChange={(e)=> setform(e.target.value)}/>
    <button>login</button>
    </form>
  
  </div>
  )
}

export default Login