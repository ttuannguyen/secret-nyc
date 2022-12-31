import React from 'react'

const Signup = () => {
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