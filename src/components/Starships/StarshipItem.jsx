import React from 'react';

const StarshipItem = (props) => {
    const { starship } = props;

    // console.log(starship.name)

    return (
        <div>
            <p>{starship.name}</p>
        </div>
    );
}

export default StarshipItem;