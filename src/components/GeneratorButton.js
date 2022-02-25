import styled from 'styled-components';

export const GeneratorButton = () => {
    const Button = styled.button`
        background-color: #fff000;
        border: 2px solid #000;
        width: 100%;
        max-width: 500px;
        margin: auto;
        cursor: pointer;
        display: block;
    `;

    return (
        <Button>Tell me a dad joke.</Button>
    );
};
