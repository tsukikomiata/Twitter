import {Navigate} from "react-router";
import React from "react";

function RequireUnauth(children: any, props?: any) {

    let {auth, setAuthorised, user} = props

    if (auth) {
        // @ts-ignore
        return <Navigate to="/home"/>;
    }

    return React.cloneElement(children, {auth: auth, setAuthorised: setAuthorised, user: user});
}

export default RequireUnauth