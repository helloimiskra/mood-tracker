export const deleteUser = (id) => {
    return {
        type: 'DELETE_USER',
        id

    }
}

export const addMood = (mood) => {
    return {
        type: 'ADD_MOOD',
        mood
    }
    
}

