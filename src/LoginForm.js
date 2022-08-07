import  React from 'react';
import App from './App'

function LoginForm() {


    return (
        <form>
            <label>Name</label>
            <input type='text'/>
            <br></br>
            <label>Email</label>
            <input type='text' />
            <br></br>
            <label>Password</label>
            <input type='text'/>
            <br></br>
            <button type='submit'>Login</button>
        </form>
    )
}

export default LoginForm