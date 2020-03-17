import React, { Component } from 'react';
import Joi from 'joi-browser';
import Input from '../commom/input';
import Form from '../commom/form';
import axios from 'axios';

const apiEndpoint = 'http://localhost:3000/api/users';

export default class Uata extends Form {
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

    doSubmit = async () => {
        const { data } = this.state;
        await axios.post(apiEndpoint, data);
        alert('User Added Successfully');
        this.props.history.push('/users');
    }

    render() {
        return (
            <div>
                <h1>Add New data</h1>
                <form onSubmit={this.handleSubmit} action="">
                    {this.renderInput('name', 'Name')}
                    {this.renderInput('email', 'Email', 'email')}
                    {this.renderInput('password', 'Password', 'password')}
                    {this.renderButton('Add data')}
                </form>
            </div>
        )
    }
}