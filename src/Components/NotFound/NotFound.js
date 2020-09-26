import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h3>Page Not Found!</h3>
            <h2>404</h2>
            <Link to='/'>Go Home</Link>
        </div>
    );
};

export default NotFound;