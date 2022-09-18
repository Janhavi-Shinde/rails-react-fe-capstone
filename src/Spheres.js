import React from "react";

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


    return (
      <>
      <h1> Sphere Section</h1>
      
    
            
      <h3>Create New Sphere</h3>
      <form >
        <label>
          Sphere Name:
          <input
            type="text"
            
          />
        </label>
        
        <br></br>

        <button type="submit">Create Sphere</button>
      </form>
   
      </>


    )


}

export default Spheres;