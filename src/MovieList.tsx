import type { Movie } from './Movie';
import MovieCard from './MovieCard';
import { useWatchlist } from './WatchlistContext';

const movies: Movie[] = [
    { id: 1, title: "Inception", director: "Christopher Nolan", year: 2010 },
    { id: 2, title: "The Matrix", director: "Lana Wachowski", year: 1999 },
    { id: 3, title: "Interstellar", director: "Christopher Nolan", year: 2014 },
    { id: 4, title: "Dune: Part Two", director: "Denis Villeneuve", year: 2024 },
];

// type MovieListProps = {
//     onAdd: (movie: Movie) => void;
// };

// export default function MovieList({ onAdd }: MovieListProps) {
export default function MovieList() {
    const { dispatch } = useWatchlist();

    return (
        <div>
            <h2>Movies</h2>
            {movies.map(movie => (
                <MovieCard
                    key={movie.id}
                    title={movie.title}
                    director={movie.director}
                    year={movie.year}
                    onAdd={() => dispatch({ type: "ADD", payload: movie})}
                />
            ))}
        </div>
    );
}