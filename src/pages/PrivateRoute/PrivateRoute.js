import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    if (isLoading) {
        return <h1>loading....</h1>;
    }
    return (
        <Route
            {...rest}
            render={({ location }) => user.displayName ?
                children :
                <Redirect
                    to={{
                        pathname: '/login',
                        state: { from: location }
                    }}
                ></Redirect>
            }
        ></Route >
    );
};

export default PrivateRoute;