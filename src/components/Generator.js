import { DadJoke } from './DadJoke';
import { GeneratorButton } from './GeneratorButton';

export const Generator = ({currentJoke, updateJoke}) => {
    return (
        <section>
            <GeneratorButton setCurrentJoke={updateJoke} />
            <DadJoke currentJoke={currentJoke} />
        </section>
    );
}
