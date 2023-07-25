import React, { useContext } from 'react';
import { UserContext, UserProvider } from '../context/user';

const Home = () => {
    const { user } = useContext(UserContext)

    if (!user || user.error) {
        return (<h3>Please Login or Signup</h3>)
        // return (<h3>Hello, {user.username}</h3>)
    } else {
        return (<h3>Hello, {user.username}</h3>)
        // return (<h3>Please Login or Signup</h3>)
    }
}

export default Home