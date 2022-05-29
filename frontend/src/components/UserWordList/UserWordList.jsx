import React from 'react'
import Cards from '../Collection/Cards';

function UserWords(props) {
    const {userWords} = props;

  return (
    <div>
    <div> 
    {userWords.map((word , index)=> {return <span ><Cards word= {word} key={index} /></span>})}
    </div>
        
    </div>
    
    
  )
}

export default UserWords