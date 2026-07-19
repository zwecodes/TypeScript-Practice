import { useWatchlist } from './WatchlistContext';

// type WatchListProps = {
//     watchlist: Movie[];
//     onRemove: (id: number) => void;
// };

// export default function WatchList({ watchlist, onRemove }: WatchListProps) {
export default function WatchList() {
    const { watchlist, dispatch } = useWatchlist();
    return (
        <div>
            <h2>Watchlist</h2>
            {watchlist.length === 0 ? (
                <p>Watchlist is empty</p>
            ) : (
                <>
                    {watchlist.map(movie => (
                        <div key={movie.id}>
                            <p>{movie.title} - {movie.director}</p>
                            <button onClick={() => dispatch({ type: 'REMOVE', payload: movie.id})}>Remove</button>
                        </div>
                    ))}
                    <p>Total: {watchlist.length} movies</p>
                </>
            )}
        </div>
    );
}