import { ClearFavoritesButton } from "./ClearFavoritesButton";

export const Favorites = () => {
    const favoriteJokes = JSON.parse(localStorage.getItem('favorite-jokes')) ?? {};
    const favorites = favoriteJokes.map(({joke}) => (
        <article>{joke}</article>
    ));

    return (
        <section>
            {favorites}
            <ClearFavoritesButton />
        </section>
    );
}
