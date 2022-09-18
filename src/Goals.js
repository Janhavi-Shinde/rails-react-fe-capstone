import React from "react";

function Goals() {
  // const [data, setData] = useState(null);

  // useEffect(
  //     () => {
  //         fetch('http://127.0.0.1:3000/goals')
  //             .then(r => r.json())
  //             .then(data => setData(data));
  //         console.log(data);
  //     }, []

  // );


    return (
      <>
      <h1> Goals Section</h1>
      
    

            <h3>Create New Sphere</h3>
      <form >
        
        <label>
          Goal Name:
          <input
            type="text"
            
          />
        </label>
        <br></br>
        <label>
          Goal Description (optional):
          <input
            type="text"
            
          />
        </label>
        <br/>
        <label>
          Category/Sphere:
          <input
            type="text"
            
          />
        </label>
        <br></br>

        <button type="submit">Create Goal</button>
      </form>
    
      </>


    )


}

export default Goals;