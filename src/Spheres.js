import React, { useState, useEffect } from "react";

function Spheres() {
  const [data, setData] = useState(null);

  useEffect(
      () => {
          fetch('http://127.0.0.1:3000/spheres')
              .then(r => r.json())
              .then(data => setData(data));
          console.log(data);
      }, []

  );


    return (
      <>
      <h1> Sphere Section</h1>
      <p>
      {data}
      </p>
    
      </>


    )


}

export default Spheres;