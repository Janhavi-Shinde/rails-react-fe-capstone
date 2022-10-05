import React, {useState, useEffect} from "react";

function Profile() {

    const [data, setData] = useState('');

useEffect(
    () => {
        fetch('http://127.0.0.1:3000/profile', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        }).then(r => r.json()        
        )
          .then(response => {
            setData(JSON.stringify(response.user.data.attributes))
            
            console.log("From Sphere:" + response);
            
            
          });
          
          
      }, []);

      console.log('From Sphere > localStorage, but not from fetch: ' +localStorage.getItem('token'));

      

      return (
        <>
        <h1>This is the User's Profile</h1>
        <p>{data && data}</p>
        
    
        
        
        </>
        )
    }
export default Profile;