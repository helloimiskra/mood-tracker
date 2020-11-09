import React from 'react'
import User from './User'

export const Users = ({users}) => {
    return (
        <div>
            <h1>Current users</h1>
            {users.map(user => <User user = {user}/>
            )}
                
               
        </div>
    )
}


export default Users
