import './App.css';
import { useEffect, react, useState } from 'react';
// import LoginForm from './LoginForm';
import Form from './Form';

function App() {

  const [apiData, setApidata] = useState(null);
  const [formData, setFormData] = useState({
    name: 'name',
    email: 'email',
    password: 'password'
  });

  useEffect(
    () => {
      fetch('http://127.0.0.1:3000/')
        .then(r => r.json())
        .then(data => setApidata(data));
    }, []
  )

  function handleChange(event) {
    
    const name = event.target.name;
    console.log(name)
    let value = event.target.value;
    const email = event.target.email;
    
    let emailval = event.target.value;
    

    

    setFormData({
      ...formData,
      [name]: value,
      [email]: emailval
    });
  }

 
  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }
  

  return (
    <>
      <p>formData.name: {formData.name}</p>
      {/*<p>formData.email:{formData.email}</p>
      // <p>formData.password:{formData.password}</p> */}
      {/* <LoginForm  handleChange={handleChange} formData={formData} handleSubmit={handleSubmit}/> */}
      <Form/>
    </>
  );
}

export default App;
