import React, { useState, useEffect } from 'react';
import CharacterItem from './CharacterItem.jsx';

const CharacterList = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        getCharacters()
            .then(newCharacters => setCharacters(newCharacters));
    }, []);

    let getCharacters = async () => {
        let cont = true;
        let page = 1;
        let newCharacters = [];
        while (cont) {
            const moreCharacters = await fetch(`https://swapi.dev/api/people/?page=${page}`)
                .then(response => response.json());
            page += 1;
            newCharacters = [...newCharacters, ...moreCharacters.results];
            if (!moreCharacters.next) cont = false;
        }
        return newCharacters;
    }

    let characterItems = characters.map((character, i) => (
        <CharacterItem key={i} character={character} />
    ));

    return (
        <div>
            <h1>Characters</h1>
            {characterItems}
        </div>
    );
}

export default CharacterList;