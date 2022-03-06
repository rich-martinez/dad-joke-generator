import { Generator } from './Generator';
import axios from 'axios';
import { useState } from 'react';

export const Main = () => {
    const [ currentJoke, setJoke ] = useState({joke: '', id: ''});
    const updateJoke = async () => {
        const joke = await axios
            .get('https://icanhazdadjoke.com', { headers: {'Accept': 'application/json'}})
            .then(({data: {joke, id}}) => ({joke, id}));
        
        setJoke(joke)
    }

    return (
        <main>
            <Generator currentJoke={currentJoke} updateJoke={updateJoke} />
        </main>
    );
};