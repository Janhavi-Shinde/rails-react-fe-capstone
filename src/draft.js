import React, { useState } from "react";
// THIS IS A  DRAFT CODE FOR THE SPHERE FORM

function Form () {
  const [sphereTitle, setSphereTitle] = useState('')

  function handleChange(event) {
    setSphereTitle(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault();
    
      
    fetch('http://127.0.0.1:3000/spheres', {
      method:'POST',
      headers:{'Content-Type':"application/json"},
      body: JSON.stringify({
        
        title: sphereTitle,
        user_id: localStorage.getItem('user_id'),
        
        
      
      })
    }).then((r => r.json()))
      .then(response => console.log(response))
    
    
  }

  return (
    <section>
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={title}
            onChange={handleChange}
          />
        </label>
        <br></br>
        
        

        <button type="submit">Create user</button>
      </form>
    </section>
  );
}

export default Form;
