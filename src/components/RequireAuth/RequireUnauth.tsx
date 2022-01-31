import {Navigate} from "react-router";
import React from "react";

function RequireUnauth(props?: any) {

    let {children, auth, setAuthorised, user} = props

    if (auth) {
        // @ts-ignore
        return <Navigate to="/home"/>;
    }

    return React.cloneElement(children, {auth: auth, setAuthorised: setAuthorised, user: user});
}

export default RequireUnauth