import styled from 'styled-components';
import { FavoritesButton } from './FavoritesButton';
import { GeneratorButton } from './GeneratorButton';

export const DadJoke = ({currentJoke: {joke, id}, updateJoke}) => {
    const ButtonContainer = styled.div`
        display: flex;
        gap: 2rem;
    `;
    const BlockQuote = styled.blockquote`
        background-color: #eee;
        padding: 1rem;
        border-left: 1rem solid #2A9D8F;
        margin: 0 0 2rem;
    `;

    return (
        <section>
            {joke !== null ? <BlockQuote>{joke}</BlockQuote> : null}
            <ButtonContainer>
                <GeneratorButton setCurrentJoke={updateJoke} />
                {joke !== null ? <FavoritesButton currentJoke={{joke, id}}>Add to favorites</FavoritesButton> : null}
            </ButtonContainer>
        </section>
    );
};
