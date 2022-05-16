import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';

const RequiredAuth = () => {
    const [admin] = useAdmin();
    if(!admin){
        return <Navigate to='/'></Navigate>
    }
    return <Outlet/>;
};

export default RequiredAuth;