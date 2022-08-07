
import './App.css';
import { useEffect, react, useState } from 'react';
import LoginForm from './LoginForm';

function App() {

  const [apiData, setApidata] = useState(null);

  useEffect(
    () => {
      fetch('http://localhost:3000')
        .then(r => r.json())
        .then(data => setApidata(data));
    }, []
  )

  return (
    <LoginForm />
    
  );
}

export default App;
