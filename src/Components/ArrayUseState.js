import React, { useState } from 'react'

const ArrayUseState = () => {
    const[form,setform]=useState({
        firstName:'hello',
        lname:'world',
        email:'kkausik11@gmail.com'
    })

    const handleChange = (e)=>{
           setform({
            ...form,
            firstName:e.target.value
           })
    }

  return (
    <div>
      <form>
        <label htmlFor='firstname'>First Name:</label>
        <input id='firstname' value={form.firstName} onChange={handleChange}/><br/>
        <label htmlFor='lname'>Last Name:</label>
        <input id='lname' value={form.lname} /><br/>
        <label htmlFor='email'>Email:</label>
        <input id='email' value={form.email} /><br/>
      </form>
    </div>
  )
}

export default ArrayUseState
