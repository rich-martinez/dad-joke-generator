import { Page } from "./Page";
import styled from 'styled-components';
import { useLocalStorage } from "../useLocalStorage";


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
    const Article = styled.article`
        background-color: grey;
    `;

    const favoritJokesInitialValue = {};
    
    const [value, setValue] = useLocalStorage('favorite-jokes', favoritJokesInitialValue);
    const updatedJokes = Object.values(value).map((joke, index) => {        
        return (<Article key={index}>{joke}</Article>);
    });

    return (
        <Page
            title="Favorite Jokes"
            content={
                <ArticleContainer>
                    {updatedJokes}
                    <ClearFavoritesButton onClick={() => setValue(favoritJokesInitialValue)}>Clear Favorites</ClearFavoritesButton>
                </ArticleContainer>
            }
        />
    );
}
