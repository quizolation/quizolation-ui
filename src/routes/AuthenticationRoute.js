// Handle Auth and Authorisation
import React, {Fragment} from 'react';
import {Redirect, Route} from "react-router-dom";
import {connect} from "react-redux";

const AuthenticationRoute = ({team, loading, component: Component, ...rest}) => (
  <Route
    {...rest}
    render={props => {
      if (loading) {
        return <Fragment/>;
      }

      return team != null
        ? <Redirect to={{pathname: '/', state: {from: props.location}}}/>
        : <Component {...props} />;
    }}
  />
);

const mapStateToProps = state => {
  const {team, loading} = state.Auth;
  return {team, loading};
};

export default connect(mapStateToProps, {})(AuthenticationRoute);
