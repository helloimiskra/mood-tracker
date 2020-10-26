import React, { Component } from 'react';
import Users from '../components/users/Users'
import {fetchUsers} from '../actions/fetchUsers'

class UsersContainer extends Component {

    componentDidMount(){
        this.props.fetchUsers()
    };

    render() {
        return (
            <div>
                Users Container
                <Users users = {this.props.users}/>
            </div>
        );
    }
}

export default UsersContainer;