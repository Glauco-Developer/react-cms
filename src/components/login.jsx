import React, { Component } from 'react';

export default class Login extends Component {
    state = {
        account: { username: '', password: '' }
    };
    
    handleSubmit = e => {
        e.preventDefault();
        console.log('Submitted')
    }

    handleChange = ({ currentTarget: input }) => {
        const account = { ...this.state.account };
        account[input.name] = input.value;
        this.setState({ account });
    }

    render(){
        const { account } = this.state;

        return(
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit} action="">
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input
                            value={account.username}
                            onChange={this.handleChange}
                            id="username"
                            name="username"
                            type="text"
                            className="form-control"
                            autoFocus/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">password</label>
                        <input
                            value={account.password}
                            onChange={this.handleChange}
                            id="password"
                            name="password"
                            type="password"
                            className="form-control"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Log in</button>
                </form>
            </div>
        )
    }
}