import type { Movie } from './Movie';

type WatchListProps = {
    watchlist: Movie[];
    onRemove: (id: number) => void;
};

export default function WatchList({ watchlist, onRemove }: WatchListProps) {
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
                            <button onClick={() => onRemove(movie.id)}>Remove</button>
                        </div>
                    ))}
                    <p>Total: {watchlist.length} movies</p>
                </>
            )}
        </div>
    );
}