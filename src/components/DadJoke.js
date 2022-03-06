import styled from 'styled-components';

export const DadJoke = ({currentJoke: {joke}}) => {
    const DadJoke = styled.blockquote`
        border: 2px solid #000;
        width: 100%;
        max-width: 500px;
        margin: auto;
        cursor: pointer;
        display: block;
    `;

    return (
        <DadJoke>{joke}</DadJoke>
    );
};
