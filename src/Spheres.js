import React, {useState, useEffect} from "react";

function Spheres() {
  const [data, setData] = useState(" ");

  useEffect(
      () => {
          fetch('http://127.0.0.1:3000/profile', {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`
            }
          }).then(r => r.json())
            .then(response => {
              setData(response);
              console.log("From Sphere:" + response);
            });
            
            
        }, []);

  const [sphereData, setSphereData] = useState(" ");

  console.log('From Sphere > localStorage, but not from fetch: ' +localStorage.getItem('token'));

  function handleChange(event) {
    setSphereData(event.target.value)
  };

  function handleSubmit(event){
    event.preventDefault();
    setTempText(sphereData);
  }

  const [tempText, setTempText] = useState(" ");


  function handleClick() {
    console.log(data);
  }
    return (
      <>
      <h1> Sphere Section</h1>
      
    
            
      <h3>Create New Sphere</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Sphere title:
          <input
            type="text"
            name="title"
            value={sphereData}
            onChange={handleChange}
            
          />
        </label>
        
        <br></br>

        <button type="submit">Create Sphere</button>
      </form>
      <br/>
      <br/>
      <br/>
      <br/>
   <h5> Newly created Sphere: </h5>
    Title: <span/>{tempText} 
   
   <br>
   </br>

   <button onClick={handleClick}>User Info</button>
      </>


    )


}

export default Spheres;