import "./index.css";
import PlayButton from "./PlayButton";
//import{ useState } from 'react';

function Home(){

    return (
        <div>
            <img src="boucneball.gif" alt="bounce logo" className="App-logo"></img>
            <PlayButton />
            <p>Online players: {Math.ceil(1000 * Math.random())}</p>

        </div>
    );
}

export default Home;