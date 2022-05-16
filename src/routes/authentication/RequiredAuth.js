import React, { useState } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const RequiredAuth = () => {
    const [user, setUser] = useState(true);
    const location = useLocation();
    if(!user){
        return <Navigate to='/login' state={{from: location}} replace></Navigate>
    }
    return <Outlet/>;
};

export default RequiredAuth;