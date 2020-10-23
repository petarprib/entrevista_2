import React from 'react';

const CharacterItem = (props) => {
    const { character } = props;

    return (
        <div>
            <p>{character.name}</p>
        </div>
    );
}

export default CharacterItem;