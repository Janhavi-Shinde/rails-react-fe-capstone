import React, { useState } from "react";


function Form () {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    email: ""
  });

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
      
    fetch('http://127.0.0.1:3000/login', {
      method:'POST',
      headers:{'Content-Type':"application/json"},
      body: JSON.stringify({
        
        name: formData.name,
        email: formData.email,
        password: formData.password
        
      
      })
    }).then((r => r.json()))
      .then(response => {
        localStorage.setItem('token', response.jwt )
    })
    
    console.log(formData);
  }

  return (
    <section>
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <br></br>
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br></br>
        <label>
          Password:
          <input
            type="text"
            name="password"
            value={formData.password}
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
