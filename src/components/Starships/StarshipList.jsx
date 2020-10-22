import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import StarshipItem from './StarshipItem';

const StarshipList = () => {
    const [loggedUser] = useState(JSON.parse(localStorage.getItem("loggedUser")) || null);
    const [starships, setStarships] = useState(JSON.parse(localStorage.getItem("starships") || "[]"));
    const [nextPage, setNextPage] = useState("https://swapi.dev/api/starships/?page=1");

    useEffect(() => {
        fetchStarships(nextPage);
    }, []);

    useEffect(() => {
        fetchStarships(nextPage);
    }, [nextPage]);

    const fetchStarships = (nextPage) => {
        if (nextPage !== null) {
            fetch(nextPage)
                .then(response => response.json())
                .then(data => {
                    let newStarships = [...starships, ...data.results];
                    setStarships(newStarships);
                    setNextPage(data.next);
                });
        }
    };

    let starshipItems = starships.map((starship, i) => {
        return (
            <StarshipItem key={i} starship={starship} />
        );
    });

    if (!loggedUser) {
        return <Redirect to="/login" />
    } else {
        return (
            <>
                <h1>ijhdfgiohdjgf</h1>
            </>
        )
        // if (nextPage === null) {
        //     return (
        //         <div>
        //             {/* {starshipItems} */}
        //             <h1>iodjfiogjdf</h1>
        //         </div>
        //     );
        // }
    }
}

export default StarshipList;