import React, { useState, useEffect } from 'react';

const UserContext = React.createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState({}); 
    const [loggedIn, setLoggedIn] = useState(false); // false = initial state is not logged in
    const [secretSpots, setSecretSpots] = useState([]); // all the spots in db
    const [visits, setVisits] = useState([]);


    return (
        <UserContext.Provider>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }