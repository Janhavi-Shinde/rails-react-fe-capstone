import React, {useState} from "react";

function Spheres() 
{
  const [sphereTitle, setSphereTitle] = useState('')

  function handleChange(event) {
    setSphereTitle(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault();
    
      
    fetch('http://127.0.0.1:3000/spheres', {
      method:'POST',
      headers:{
        'Content-Type':"application/json",
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({
        sphere: {

          title: sphereTitle,
          user_id: localStorage.getItem('user_id'),
        
        }
      
      })
    }).then((r => r.json()))
      .then(response => console.log(response))
    
    
  }

  return (
    <section>
      <h1>Create New Sphere</h1>
      
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            
            onChange={handleChange}
          />
        </label>
        <br></br>
        
        

        <button type="submit">Create Sphere</button>
      </form>
    </section>
  );
}

export default Spheres;