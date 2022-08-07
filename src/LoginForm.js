import  React from 'react';
import App from './App'

function LoginForm({ handleFormData, handleName }) {


    return (
        <form>
            <label>Name</label>
            <input type='text' onChange={handleName} />
            <br></br>
            <label>Email</label>
            <input type='text' />
            <br></br>
            <label>Password</label>
            <input type='text' />
            <br></br>
            <button type='submit' onSubmit={handleFormData}>Login</button>
        </form>
    )
}

export default LoginForm