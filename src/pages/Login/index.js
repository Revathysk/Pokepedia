import './styles.css'
import React, { useState} from 'react'

const Login = ({setUser}) => {
    const[userName,setUserName]= useState('')

    const handleChange= e =>{setUserName(e.target.value)}
    const handleSubmit =e =>{
        e.preventDefault()
        setUser(userName)
    }

    console.log('props', setUser)

    return (
        <form id="login-form" className='mx-auto' onSubmit={handleSubmit}>
            <div  className="mb-3">
                <label htmlFor="exampleInputUser1" className="form-label">User Name</label>
                <input 
                    type="text" className="form-control" 
                    id="exampleInputUser1" aria-describedby="userHelp"
                    value={userName}
                    onChange={handleChange}
                />
                    <div id="userHelp" className="form-text">We'll never share your user with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
   
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}

export default Login;
