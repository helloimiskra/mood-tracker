export const fetchUsers = () => {
    return(dispatch) => {

        dispatch({type: 'LOADING USERS'})
        fetch('http://localhost:3000/api/v1/users')
        .then(response=> {
            return response.json()
        })
        .then(responseJSON=> {
            let userData = responseJSON.data 
            dispatch({type: "ADD_USERS", users: userData})
        })
    }
    
}