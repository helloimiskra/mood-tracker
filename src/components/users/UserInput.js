import React, { Component } from 'react';

class UserInput extends Component {

    state = {
        username: ""
    }

    handleOnChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmit(event){
        event.preventDefault()
        let user = {username: this.state.username}
        this.props.addUser(user)
        this.setState({
            username: ""
        })

    }

    render() {
        return (
            <div>
                <h1>Sign-up or log-in:</h1>
                <form onSubmit={(event)=> this.handleOnSubmit(event)}>      
                <label>Username: </label>
                <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={(event)=> this.handleOnChange(event)}/><br></br>
                <input type="submit"/>
                </form>
            </div>
        );
    }
}

export default UserInput;