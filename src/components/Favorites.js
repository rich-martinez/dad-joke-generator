import { useEffect, useState } from "react";
import { Page } from "./Page";
import styled from 'styled-components';


export const Favorites = () => {
    const ArticleContainer = styled.section`
        display: grid;
        gap: 2rem;
        grid-template-columns: repeat(3, 1fr);
    `;
    const ClearFavoritesButton = styled.button`
        background-color: #fff000;
        border: 2px solid #000;
        cursor: pointer;
        grid-column-start: 1;
    `;

    const favoriteJokesStorage = localStorage.getItem('favorite-jokes');
    const favoriteJokes = typeof favoriteJokesStorage === 'string' ? JSON.parse(favoriteJokesStorage) : {};
    const favoriteJokeValues = Object.values(favoriteJokes);
    const clearFavoritesStorage = () => {
        localStorage.removeItem('favorite-jokes');
    };

    const [currentJokes, setFavoriteJokes] = useState(favoriteJokeValues);

    const jokes = Array.isArray(currentJokes) ? currentJokes : [];

    useEffect(() => {    
        window.addEventListener('storage', clearFavoritesStorage);
    
        return () => {
            window.removeEventListener('storage', clearFavoritesStorage);
        };
    }, [currentJokes]);
    
    const updatedJokes = jokes.map((joke, index) => {
        const Article = styled.article`
            background-color: grey;
        `;
        
        return (<Article key={index}>{joke}</Article>);
    });


    return (
        <Page
            title="Favorite Jokes"
            content={
                <ArticleContainer>
                    {updatedJokes}
                    <ClearFavoritesButton onClick={setFavoriteJokes}>Clear Favorites</ClearFavoritesButton>
                </ArticleContainer>
            }
        />
    );
}
