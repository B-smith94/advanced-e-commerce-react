import React from "react";

const UserContext = React.createContext({ // Default functionality
    user: { name: '', isLoggedIn: false },
    setUser: () => {}
});

export default UserContext;