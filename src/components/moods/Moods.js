import React from 'react'


export const Moods = (moods) => {

    return (
        <div>
           
            <h1>Your moods</h1>
            {moods.map(mood => mood.mood_type)}
                
               
        </div>
    )
}


export default Moods