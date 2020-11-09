export const fetchUsers = () => {
    return(dispatch) => {
        dispatch({type: 'LOADING USERS'})
        fetch('http://localhost:3000/api/v1/users')
        .then(response=> {
            debugger
            return response.json()})
        .then(responseJSON=> {
            debugger
            let userData = responseJSON.data.map(user=> user.attributes) 
            debugger
            dispatch({ type: "ADD_USERS", users: userData})
        })
    }
    
}