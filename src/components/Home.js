import axios from 'axios';
import { useState } from 'react';
import { DadJoke } from './DadJoke';

export const Home = () => {
    const [ currentJoke, setJoke ] = useState({joke: null, id: null});
    const updateJoke = async () => {
        const joke = await axios
            .get('https://icanhazdadjoke.com', { headers: {'Accept': 'application/json'}})
            .then(({data: {joke, id}}) => ({joke, id}));
        
        setJoke(joke)
    }

    return (
        <DadJoke currentJoke={currentJoke} updateJoke={updateJoke} />
    );
};