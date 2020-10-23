import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import StarshipItem from './StarshipItem';

const StarshipList = () => {
    const [loggedUser] = useState(JSON.parse(localStorage.getItem("loggedUser")) || null);
    const [starships, setStarships] = useState([]);

    useEffect(() => {
        getStarships()
            .then(newStarships => setStarships(newStarships));
    }, []);

    let getStarships = async () => {
        let cont = true;
        let page = 1;
        let newStarships = [];
        while (cont) {
            const moreStarships = await fetch(`https://swapi.dev/api/starships/?page=${page}`)
                .then(response => response.json());
            page += 1;
            newStarships = [...newStarships, ...moreStarships.results];
            if (!moreStarships.next) cont = false;
        }
        return newStarships;
    }

    let starshipItems = starships.map((starship, i) => (
        <StarshipItem key={i} starship={starship} />
    ));

    if (!loggedUser) {
        return <Redirect to="/login" />
    } else {
        return (
            <div>
                <h1>Starships</h1>
                {starshipItems}
            </div>
        );
    }
}

export default StarshipList;