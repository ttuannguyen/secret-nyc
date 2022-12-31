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


    return (
        <div id='signup'> 
            <form >
            <label>Username</label>
            <input type="text" /><br/>
            <label>Password</label>
            <input type="password" /><br/>
            <label>Password Confirmation</label>
            <input type="password" /><br/>
            <button type="submit">Sign up!</button>
        </form>
        <ul>
        </ul>
        </div>
)
}

export default Signup