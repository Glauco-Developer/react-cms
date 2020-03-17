import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const apiEndpoint = 'http://localhost:3000/api/users';

export default class Users extends Component {
    state = {
        users: []
    }

    async componentDidMount() {
        const { data: users } = await axios.get(apiEndpoint);
        this.setState({ users });
    }

    async handleDelete(user) {
        await axios.delete(`${apiEndpoint}/${user._id}`);
        const users = this.state.users.filter(c => c._id !== user._id);
        this.setState({ users })
    }

    render() {
        const { users } = this.state;
        return (
            <>
                <h1>Users</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user._id}>
                                <th scope="row">{user._id}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <Link to={`/users/${user._id}`} type="button" className="btn btn-light mr-2">Update</Link>
                                    <button onClick={() => this.handleDelete(user)} type="button" className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <hr />
                <Link to={'/add-user'} className="btn btn-primary float-right">Add new user</Link>
            </>
        )
    }
}