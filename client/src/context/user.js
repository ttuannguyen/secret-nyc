import React, { useState, useEffect } from 'react';

const UserContext = React.createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState({}); 
    const [loggedIn, setLoggedIn] = useState(false); // false = initial state is not logged in
    const [secretSpots, setSecretSpots] = useState([]); // all the spots in db
    const [visits, setVisits] = useState([]);

    useEffect(() => {
        fetch('/me')
        .then(res => res.json())
        .then(json => {
            console.log(json)
            setUser(json)
            // if (json.error) {
            //     setLoggedIn(false)
            // } else {
            //     setUser(json) 
            //     setLoggedIn(true)
  
            // }
        })
    }, [])

    const login = () => {
        
    }

    const logout = () => {
        
    }

    const signup = () => {

    }




    return (
        <UserContext.Provider value={{user, loggedIn, secretSpots, visits, signup}}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }