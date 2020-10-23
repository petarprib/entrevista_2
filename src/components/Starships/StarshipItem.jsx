import React from 'react';

const StarshipItem = (props) => {
    const { starship } = props;

    return (
        <div>
            <p>{starship.name}</p>
        </div>
    );
}

export default StarshipItem;