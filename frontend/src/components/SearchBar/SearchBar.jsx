import React from 'react'

export default function SearchBar(props) {
    const {handleSubmit, setWord, word} = props

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group col-md-6">
        <label>Search for a word</label>
        <input
          className="form-control form-control-sm"
          value={word}
          onChange={(event) => setWord(event.target.value)}
        />    
        <button className="btn btn-primary" type="submit">
          Search
        </button>
      </div>
    </form>
  )
}
 {/* <div className="form-group col-md-6">  */}