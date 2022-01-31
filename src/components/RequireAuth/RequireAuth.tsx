import {Navigate} from "react-router";
import React from "react";

function RequireAuth(children: any, props?: any) {
    let {auth, setAuthorised, user} = props;
    if (!auth) {
        return <Navigate to="/login"/>;
    }

    return React.cloneElement(children, {auth: auth, setAuthorised: setAuthorised, user: user});
}

export default RequireAuth