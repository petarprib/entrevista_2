// import React from 'react';

// const Starships = () => {
//     const [loggedUser] = useState(JSON.parse(localStorage.getItem("loggedUser")) || null);
//     const [starships, setStarships] = useState(JSON.parse(localStorage.getItem("starships") || "[]"));
//     const [nextPage, setNextPage] = useState("https://swapi.dev/api/starships/?page=1");

//     useEffect(() => {
//         const fetchStarships = (nextPage) => {
//             if (nextPage !== null) {
//                 fetch(nextPage)
//                     .then(response => response.json())
//                     .then(data => {
//                         let newStarships = [...starships, ...data.results];
//                         setStarships(newStarships);
//                         setNextPage(data.next);
//                     });
//             }
//         };

//         fetchStarships(nextPage)
//     }, [nextPage]);

//     return (
//         <div>

//         </div>
//     );
// }

// export default Starships;