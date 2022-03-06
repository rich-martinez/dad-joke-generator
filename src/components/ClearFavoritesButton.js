import styled from 'styled-components';

export const ClearFavoritesButton = () => {
    const clearFavorites = () => {
        localStorage.removeItem('favorite-jokes');
    };

    const Button = styled.button`
        background-color: #fff000;
        border: 2px solid #000;
        cursor: pointer;
    `;

    return (
        <Button onClick={() => clearFavorites()}>Clear Favorites</Button>
    );
};
