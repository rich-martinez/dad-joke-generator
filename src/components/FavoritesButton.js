import styled from 'styled-components';

export const FavoritesButton = ({currentJoke}) => {
    const addFavoriteJoke = ({id, joke}) => {
        const favoritJokesKey = 'favorite-jokes';
        const favoritJokes = JSON.parse(localStorage.getItem(favoritJokesKey)) ?? {};

        favoritJokes[id] = joke;

        localStorage.setItem(favoritJokesKey, JSON.stringify(favoritJokes));
    };

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
        <Button onClick={() => addFavoriteJoke(currentJoke)}>Add to Favorites</Button>
    );
};
