import React from "react";

const NoRoute = ({ location }) => {
    return(
        <div className="alert alert-danger">404 No resource at {location.pathname}</div>
    );
};

export default NoRoute;
