import React from 'react'
import Poste from './Poste'


const Postlist = ({posts
,id}) => {
  console.log(posts
    )
  return (
    <div>
 
 {posts.map((item) => <Poste  post ={item}/>)}

      
      
      </div>
  )
}

export default Postlist