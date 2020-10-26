import React from 'react'


export const Users = ({users}) => {
    return (
        <div>
            <h1>Current users</h1>
            {users.map(user=>
                <li key = {user.id}>
                    {user.username}
                </li>)}
        </div>
    )
}


export default Users
