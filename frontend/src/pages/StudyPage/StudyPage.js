import React, { useState } from 'react'
import Cards from '../../components/Collection/Cards';
import './StudyPage.css'


function StudyPage(props) {
  const {statTracker, stats} = props
    const [studyWord, setStudyWord] = useState('')



    const handleSubmit = () => {

    }

  return (
    <div className='study'>
    <div  className='study-content' > 
    <h1>Study Cards</h1>
    <div>
    <img src='https://jooinn.com/images/ancient-book-7.png' alt='old books' />
    <div className='container'>
      
    </div>
    
       
      
    </div>
      
    </div>
    </div>
  )
}

export default StudyPage