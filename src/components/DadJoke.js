import styled from 'styled-components';
import { FavoritesButton } from './FavoritesButton';
import { GeneratorButton } from './GeneratorButton';

export const DadJoke = ({currentJoke: {joke, id}, updateJoke}) => {
    const ButtonContainer = styled.div`
        display: flex;
        gap: 2rem;
    `;

    return (
        <section>
            {joke !== null ? <blockquote>{joke}</blockquote> : null}
            <ButtonContainer>
                <GeneratorButton setCurrentJoke={updateJoke} />
                {joke !== null ? <FavoritesButton currentJoke={{joke, id}}>Add to favorites</FavoritesButton> : null}
            </ButtonContainer>
        </section>
    );
};
