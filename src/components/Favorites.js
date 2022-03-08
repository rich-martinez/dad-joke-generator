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
        background-color: #264653;
        padding: 1rem;
        color: white;
        cursor: pointer;
        grid-column-start: 1;

        &:hover {
            background-color: #2a9d8f;
        }
    `;
    const Article = styled.article`
        background-color: #eee;
        padding: 1rem;
        border-left: 1rem solid #2A9D8F;
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
