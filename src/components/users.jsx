import React, { Component } from 'react';
import axios from 'axios';

const apiEndpoint = 'http://localhost:3000/api/users';

export default class Users extends Component {
    state = {
        users: []
    }
    async componentDidMount() {
        const { data: users } = await axios.get(`${apiEndpoint}`);
        this.setState({ users })
    }
    render(){
        const { users } = this.state;
        return(
            <>
                <h1>Users</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        { users.map(user => (
                            <tr key={user._id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                            </tr>
                        )) }
                    </tbody>
                </table>
            </>
        )
    }
}