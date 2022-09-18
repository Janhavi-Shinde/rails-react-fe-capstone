import React, {useState} from "react";

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
  const [goalData, setGoalData] = useState({
    title: "",
    description: "",
    sphere: ""
  });

  function handleChange(event) {
    setGoalData({
      ...goalData,
      [event.target.name]: event.target.value,
    })
  };

  function handleSubmit(event){
    event.preventDefault();
    setTempText(goalData);
  }

  const [tempText, setTempText] = useState(" ");

    return (
      <>
      <h1> Goals Section</h1>
      
    

            <h3>Create New Goal</h3>
      <form onSubmit={handleSubmit}>
        
        <label>
          Goal Title:
          <input
            type="text"
            name="title"
            value={goalData.name}
            onChange={handleChange}
            
          />
        </label>
        <br></br>
        <label>
          Goal Description:
          <input
            type="text"
            name="description"
            value={goalData.description}
            onChange={handleChange}
            
          />
        </label>
        <br/>
        <label>
          Category/Sphere:
          <input
            type="text"
            name="sphere"
            value={goalData.sphere}
            onChange={handleChange}
            
          />
        </label>
        <br></br>

        <button type="submit">Create Goal</button>
      </form>
    
    <h5>Newly Created Goal: </h5>
      Title: {tempText.title}
      <br></br>
      Desc: {tempText.description}
      <br></br>
      Sphere: {tempText.sphere}
    
      </>


    )


}

export default Goals;