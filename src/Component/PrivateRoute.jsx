import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContest } from './Auth/Auth';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({children}) => {
    const {user, loading}= useContext(AuthContest);
    const location= useLocation();
    if(user){
        return children;
    }
    if(loading){
        return (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading Data</span>
            </Spinner>
          );
    }
    return (
       <Navigate state={{from:location}} to='/login' replace></Navigate>
    );
};

export default PrivateRoute;