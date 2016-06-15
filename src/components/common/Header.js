import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import Loader from 'react-dots-loader';
import 'react-dots-loader/index.css';

const Header =({loading})=>{
    return (
        <nav>
            <IndexLink to="/" activeClassName="active">Home </IndexLink>
            {" | "}
            <Link to="/courses" activeClassName="active">Course</Link>
            {" | "}
            <Link to="/chat" activeClassName="active">Chat</Link>
            {" | "}
            <Link to="/about" activeClassName="active">About</Link>
            <Loader visible={loading}/>
        </nav>      
    );
};

export default Header;