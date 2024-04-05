import { createContext, useState } from 'react';

type SessionContextType = {
    ids: string[],
    addFavorite: (id:string) => void,
    removeFavorite: (id:string) => void
}

export const FavoritesContext = createContext<SessionContextType | null>(null)

export const FavoriteContextProvider = ({children}:{children:React.ReactNode}) => {
    const [favoriteMealIds, setFavoriteMealIds] = useState<string[]>([])

    const addFavorite = (id:string) => {
        setFavoriteMealIds((currentFavIds) => [...currentFavIds, id])
    }

    const removeFavorite = (id:string) => {
        setFavoriteMealIds((currentFavIds) => currentFavIds.filter((mealId) => mealId !== id))
    }

    const provider = {
        ids: favoriteMealIds,
        addFavorite,
        removeFavorite
    }
    return (
        <FavoritesContext.Provider value={provider}>
            {children}
        </FavoritesContext.Provider>
    )
}

