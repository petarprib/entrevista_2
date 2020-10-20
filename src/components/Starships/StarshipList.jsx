import React from 'react';

const StarshipList = (props) => {
    const { loggedUser, starships } = props;
    if (!loggedUser) {
        return <h1>LOG IN!</h1>
    } else {

        console.log(starships)
        return <p>don't</p>
    }
}

export default StarshipList;