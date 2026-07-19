import { createContext, useReducer, useContext } from 'react';
import type { Movie } from './Movie';

type Action = 
| { type: "ADD"; payload: Movie } 
| { type: "REMOVE"; payload: number };

type WatchlistContextType = {
    watchlist: Movie[];
    dispatch: React.Dispatch<Action>;
};

const WatchlistContext = createContext<WatchlistContextType | null>(null);

const reducer = (state: Movie[], action: Action): Movie[] => {
    switch (action.type) {
        case "ADD":
            return [...state, action.payload];
        case "REMOVE":
            return state.filter(movie => movie.id !== action.payload);
        default:
            return state;
    }
};

export function WatchlistProvider({ children }: { children: React.ReactNode }) {
    const [watchlist, dispatch] = useReducer(reducer, []);

    return (
        <WatchlistContext.Provider value={{ watchlist, dispatch }}>
            {children}
        </WatchlistContext.Provider>
    );
}

export function useWatchlist() {
    const context = useContext(WatchlistContext);
    if (!context) throw new Error("useWatchlist must be used inside WatchlistProvider");
    return context;
}