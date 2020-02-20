// import React, { Component } from 'react';
// import { Route, Redirect } from 'react-router-dom';

// export const PrivateRoute = ({ component: Component, ...rest }) => (
//     <Route {...rest} render={props => {
//         const currentUser = authenticationService.currentuserValue;
//         if (!currentUser) {
//             return <Redirect to={{ pathname: '/login', state: {from: props.location } }} />
//         }
//         return <Component {...props} />
//     }} />
// )