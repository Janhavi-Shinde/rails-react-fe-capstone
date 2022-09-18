import React, {useState} from "react";

function Spheres() {
  // const [data, setData] = useState(null);

  // useEffect(
  //     () => {
  //         fetch('http://127.0.0.1:3000/spheres')
  //             .then(r => r.json())
  //             .then(data => setData(data));
  //         console.log(data);
  //     }, []

  // );
  const [sphereData, setSphereData] = useState(" ");

  function handleChange(event) {
    setSphereData(event.target.value)
  };

  function handleSubmit(event){
    event.preventDefault();
    setTempText(sphereData);
  }

  const [tempText, setTempText] = useState(" ");

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
   
      </>


    )


}

export default Spheres;