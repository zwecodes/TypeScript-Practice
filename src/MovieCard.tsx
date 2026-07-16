type MovieCardProps = {
    title: string;
    director: string;
    year: number;
    onAdd: () => void;
}

export default function MovieCard({title, director, year, onAdd} : MovieCardProps) {
    return (
        <div>
            <h4>{title}</h4>
            <p>{director} - {year}</p>
            <button onClick={onAdd}>Add to Watchlist</button>
        </div>
    );
}