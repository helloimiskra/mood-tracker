import React from 'react'
//import User from './User'

export const Users = ({users}) => {
    debugger
    return (
        <div>
           
            <h1>Current users</h1>
            {users.map(user => user.username
            )}
                
               
        </div>
    )
}


export default Users
//<User user = {user}/>