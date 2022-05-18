import React from 'react'
import Cards from '../Collection/Cards';

function UserWords(props) {
    const {userWords} = props;

  return (
    <div className='list'>
    {userWords.map((word , index)=> {return <span key={index}><Cards word= {word}/></span>})}    
    </div>
    
    
  )
}

export default UserWords