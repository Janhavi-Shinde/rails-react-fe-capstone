import React, {useState, useEffect} from "react";
import axios from "axios"; 

function Profile() {

    const [data, setData] = useState('');
   
    const [ name, setName] = useState('');
    const [ email, setEmail] = useState('');

    
    // http://127.0.0.1:3000/profile

useEffect(
    () => {
        axios.get('http://127.0.0.1:3000/profile', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json',
            'Accepts': 'application/json '
          }
        }).then(r => {
            console.log("JSON response using axios:" + r.json());
            // setData(response);
            
           
             
            // console.log("stringified data: " + JSON.parse(JSON.stringify(response)));

            // localStorage.setItem('name', JSON.stringify(response.user.data.attributes.name));
            // localStorage.setItem('user_id', JSON.stringify(response.user.data.id));
            

                        
            // setName(response.user.data.attributes.name);
            // setEmail(response.user.data.attributes.email);
           
            
            
          });
          
          
      }, []);

      console.log('From Sphere > localStorage, but not from fetch: ' +localStorage.getItem('token'));

      
      

     
      return (
        <>
        <h1>This is the User's Profile</h1>
        <p>{data && data}</p>
        
        <p>Name: {name && name} </p> 
        <br></br>
        <p>Email: { email && email} </p>
       
         
        
        
        </>
        )
    }
export default Profile;