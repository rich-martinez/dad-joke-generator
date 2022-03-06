import styled from 'styled-components';

export const FavoritesButton = ({currentJoke}) => {
    const addFavoriteJoke = ({id, joke}) => {
        const favoritJokesKey = 'favorite-jokes';
        const favoritJokes = JSON.parse(localStorage.getItem(favoritJokesKey)) ?? {};

        favoritJokes[id] = joke;

        localStorage.setItem(favoritJokesKey, JSON.stringify(favoritJokes));
    };

    const Button = styled.button`
        background-color: #fff000;
        border: 2px solid #000;
        cursor: pointer;
    `;

    return (
        <Button onClick={() => addFavoriteJoke(currentJoke)}>Add to Favorites</Button>
    );
};
