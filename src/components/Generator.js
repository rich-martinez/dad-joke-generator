import { DadJoke } from './DadJoke';
import { GeneratorButton } from './GeneratorButton';
import { useState } from 'react';

export const Generator = () => {
    const [ currentJoke, setJoke ] = useState('');

    return (
        <section>
            <GeneratorButton setCurrentJoke={setJoke} />
            <DadJoke joke={currentJoke} />
        </section>
    );
}
