import React from 'react'

function ContactUS () {
  return (
    <div>
        <h1 className='m-4 p-4 text-center font-bold'>Contact US</h1>    
        <form  className='m-4 p-4 text-center'>
            <label>Name</label>
            <input className='rounded-sm border border-black p-2 m-2 w-100' type='text' />

            <label>Contact Number</label>
            <input className='rounded-sm border border-black p-2 m-2' type='text' />

            <button className='rounded-sm border border-black p-2 m-2 bg-slate-300 rounded-lg' type='submit'>Submit</button>
        </form>
     </div>
  )
}

export default ContactUS
