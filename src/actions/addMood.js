export const addMood = (mood, userId) => {

    return(dispatch) => {
        fetch("http://localhost:3000/api/v1/users/${userId}/moods", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(mood)
        })
        .then(response => {
            return response.json()
        })
        .then(mood => {
            dispatch({type: 'ADD_MOOD', payload: mood})
        })
    }
    
}
