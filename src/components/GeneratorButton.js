import styled from 'styled-components';

export const GeneratorButton = ({setCurrentJoke}) => {
    const Button = styled.button`
        background-color: #fff000;
        border: 2px solid #000;
        cursor: pointer;
    `;

    return (
        <Button onClick={() => setCurrentJoke()}>Tell joke</Button>
    );
};
