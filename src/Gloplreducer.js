
import React from 'react'

const Gloplreducer = (state,action) => {

    switch (action.type) {
        case 'NEW_Post': 


        return {
            posts : [action.payload, ...state.posts , ]
        }
        case 'DELETE': 


        return {
            posts : state.posts.filter((item) => item.id !== action.payload.id)
        }
        


            

    
        default:   return state;
           
    }
  
}

export default Gloplreducer