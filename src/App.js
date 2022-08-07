
import './App.css';
import { useEffect, react, useState } from 'react';
import LoginForm from './LoginForm';

function App() {

  const [apiData, setApidata] = useState(null);
  const [ name, setName] = useState(null);
  const [ email, setEmail] = useState(null);
  const [ password, setPassword] = useState(null);

  useEffect(
    () => {
      fetch('http://localhost:3000')
        .then(r => r.json())
        .then(data => setApidata(data));
    }, []
  )

  function handleFormData(event) {
    event.PreventDefault
    console.log(event.target)
    
  };

  function handleName(e){
    e.PreventDefault;
    setName(e.target.value);
    console.log(e.target.value);
  };


  return (
    <>
      <p>app.name :{name}</p>
      <p>app.email: {email}</p>
      <p>app.pass: {password}</p>
      <LoginForm  handleName={handleName}  handleFormData={handleFormData}/>
    </>
  );
}

export default App;
