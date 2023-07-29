import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import VotingCard from "./components/VotingCard";
import teamsJson from "./teams.json";
// import "./assets/scss/styles.scss";
import "bootstrap/dist/css/bootstrap.css";

function App() {
    let [teams, setTeams] = useState([]);

    useEffect(() => {
        setTeams(teamsJson);
    }, []);

    function incrementVoteCount(teamId) {
        teams = teams.map((team) => {
            if (team._id === teamId) {
                team.votes = team.votes + 1;
            }
            return team;
        });
        setTeams(teams);
    }

    return ( <
        Container className = "app" >
        <
        Row > {
            teams.map((team) => {
                return ( <
                    Col md = { 3 } >
                    <
                    VotingCard team = { team }
                    incrementVoteCount = {
                        (teamId) => incrementVoteCount(teamId)
                    }
                    /> <
                    div > 2 nd poll < /div >

                    <
                    VotingCard team = { team }
                    incrementVoteCount = {
                        (teamId) => incrementVoteCount(teamId)
                    }
                    /> < /
                    Col >
                );
            })
        } <
        /Row> < /
        Container >
    );
}
export default App;


// below is the old code to connect to node BE

// import React from "react";
// import logo from "./logo.svg";
// import "./App.css";


// function App() {
//     const [data, setData] = React.useState(null);

//     React.useEffect(() => {
//         fetch("/api")
//             .then((res) => res.json())
//             .then((data) => setData(data.message))
//             .catch((error) => {
//                 console.error("Error fetching data:", error);
//             });
//     }, []);

//     // Wrap the HTML inside a JSX element (div in this case)
//     return ( <
//         div >
//         <
//         p > {!data ? "Loading..." : data } < /p> <
//         /div>
//     );
// }

// export default App;