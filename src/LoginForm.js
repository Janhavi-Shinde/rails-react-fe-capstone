import  React from 'react';
import App from './App'

function LoginForm({ handleFormData, handleChange, formData }) {


    return (
        <form>
            <label>Name</label>
            <input type='text' onChange={handleChange} name='name' value={formData.name}/>
            <br></br>
            <label>Email</label>
            <input type='text' name='email' onChange={handleChange} value={formData.email}/>
            <br></br>
            <label>Password</label>
            <input type='text' name='password' onChange={handleChange} value={formData.password}/>
            <br></br>
            <button type='submit' onSubmit={handleFormData}>Login</button>
        </form>
    )
}

export default LoginForm