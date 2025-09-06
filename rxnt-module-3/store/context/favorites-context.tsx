import { createContext, useState } from "react";

export const FavoritesContext = createContext({
    ids: [] as string[],
    addFavorite: (id: string) => {},
    removeFavorite: (id: string) => {},
});

function FavoriteContextProvider({ children }: { children: React.ReactNode }) {
    const [favoriteMealIds, setFavoriteMealIds] = useState<string[]>([]);
    function addFavorite(id: string) {
        setFavoriteMealIds((prevIds) => [...prevIds, id]);
    }
    function removeFavorite(id: string) {
        setFavoriteMealIds((prevIds) =>
            prevIds.filter((mealId) => mealId !== id)
        );
    }
    return (
        <FavoritesContext.Provider
            value={{
                ids: favoriteMealIds,
                addFavorite: addFavorite,
                removeFavorite: removeFavorite,
            }}
        >
            {children}
        </FavoritesContext.Provider>
    );
}

export default FavoriteContextProvider;
