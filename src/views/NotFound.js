import React from 'react';
import { useHistory } from 'react-router-dom';

const NotFound = (/* { history } */) => {
    const history = useHistory();
    return (
        <>
            <h1>404 Not Found...</h1>
            <button className="btn btn-warning btn-sm" onClick={() => history.goBack()}>Regresar</button>
        </>
    )
}

export default NotFound;