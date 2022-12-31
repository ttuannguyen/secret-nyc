import React, { useContext, useState } from 'react';
import { UserContext } from '../context/user';
import { useNavigate } from 'react-router-dom';

const Signup = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    // const [errorsList, setErrorsList] = useState([]);
    const { signup } = useContext(UserContext);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()

        const userObj = {
            username,
            password,
            password_confirmation: passwordConfirmation
        }

        const handleSubmit = () => {
            console.log("submit")
        }

    }


    return (
        <div id='signup'> 
            <form onSubmit={handleSubmit}>
            <label>Username</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/><br/>
            <label>Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/><br/>
            <label>Password Confirmation</label>
            <input type="password" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)}/><br/>
            <button type="submit">Sign up!</button>
        </form>
        <ul>
            {errorsList}
        </ul>
        </div>
)
}

export default Signup