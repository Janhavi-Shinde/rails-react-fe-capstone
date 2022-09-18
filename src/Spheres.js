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
      <p>
       Data will go here
            </p>
    
            <section>
      <h1>Create New Sphere</h1>
      <form >
        <label>
          Goal Name:
          <input
            type="text"
            
          />
        </label>
        <br></br>
        <label>
          Category
          <input
            type="text"
            
          />
        </label>
        <br></br>

        <button type="submit">Create Goal</button>
      </form>
    </section>
      </>


    )


}

export default Spheres;