import React, { Component } from 'react';
import Joi from 'joi-browser';
import Input from '../commom/input';
import Form from '../commom/form';
import axios from 'axios';

const apiEndpoint = 'http://localhost:3000/api/users';

export default class User extends Form {
    state = {
        data: {
            name: '',
            email: '',
            password: ''
        },
        errors: {}
    }

    schema = {
        name: Joi.string().required().min(3).label('Name'),
        email: Joi.string().required().min(3).email().label('Email'),
        password: Joi.string().required().min(3).label('Password'),
    }

    async componentDidMount() {
        const { data: data } = await axios.get(`${apiEndpoint}/${this.props.match.params.id}`);
        console.log(data)
        this.setState({ data });
    }

    doSubmit = async () => {
        const { data } = this.state;
        await axios.put(`${apiEndpoint}/${data._id}`, data);
        alert('User Updated Successfully');
        this.props.history.push('/users');
    }

    async handleDelete() {
        const { data } = this.state;
        await axios.delete(`${apiEndpoint}/${data._id}`);
        alert('User Deleted Successfully');
        this.props.history.push('/users');
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} action="">
                    {this.renderInput('name', 'Name')}
                    {this.renderInput('email', 'Email', 'email')}
                    {this.renderInput('password', 'Password', 'password')}
                    <button onClick={() => this.handleDelete()} type="button" className="btn btn-danger float-left">Delete</button>
                    {this.renderButton('Save')}
                </form>
            </div>
        )
    }
}