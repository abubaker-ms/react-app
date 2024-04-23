import React, { useState } from 'react'

export default function Search({handleSearch,resData}) {

  const [inputValue,setInputValue]=useState("")

  const handleInputChange=(e)=>{
    console.log(e.target.value)
    setInputValue(e.target.value)
  }

  const handleSubmit=(e)=>{
    handleSearch(inputValue)
  }
  return (
    <div className='m-4 p-4 '>
      <input className="border border-sloid border-black" type="text" value={inputValue} onChange={handleInputChange}/>
      <button className='px-4 py-1 bg-green-100 m-2' onClick={handleSubmit}>Search</button>
    </div>
  )
}
