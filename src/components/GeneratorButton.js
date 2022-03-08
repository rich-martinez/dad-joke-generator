import styled from 'styled-components';

export const GeneratorButton = ({setCurrentJoke}) => {
    const Button = styled.button`
        background-color: #264653;
        padding: 1rem;
        color: white;
        cursor: pointer;

        &:hover {
            background-color: #2a9d8f;
        }
    `;

    return (
        <Button onClick={() => setCurrentJoke()}>Tell joke</Button>
    );
};
