import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/home">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/login">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/courses">Courses</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/users">Users</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}