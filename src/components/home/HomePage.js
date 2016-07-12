import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
    render(){
        return(
            <div className="jumbotron">
                <h1>Admin page hola</h1>
                <p>blah blah blah blah...</p>
                <Link to="about" className="btn btn-default btn-lg">Learn More</Link>
            </div>
        );
    }
}

export default HomePage;