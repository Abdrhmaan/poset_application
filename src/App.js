import React, { useContext, useReducer } from 'react'
import { useState } from 'react'
import Login from './components/Login'
import Header from './components/Header'
import CreatePost from './components/CreatePost'
import Postlist from './components/Postlist'
import { createContext } from 'react'
import Gloplreducer from './Gloplreducer'


export const Usercontex = createContext()
export const Postcontex = createContext({
  posts : []
})
const App = () => {

   const [user ,setuser] = useState("")
   const [posts ,setpost] = useState([])

     const imitiapost   =   useContext(Postcontex)

     const [state,dispach]  = useReducer(Gloplreducer, imitiapost)

  

  if(!user) return <Login setuser={setuser}/>

  return (
    <Postcontex.Provider value={{state,dispach}}>
    <Usercontex.Provider value={user}>
    
      <Header user ={user}   setuser ={setuser}/>
    <CreatePost   user ={user}/>
    <Postlist  posts ={ state.posts}/>

  
      
    
    
    </Usercontex.Provider>
    </Postcontex.Provider>
  )
}

export default App