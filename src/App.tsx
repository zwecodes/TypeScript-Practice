// ToDo App.tsx
/*
import { useState } from 'react';

type Todo = {
        id: number;
        text: string;
        done: boolean;
    }

export default function App() {
    
    const [todos, setTodos] = useState<Todo[]>([]);
    const [input, setInput] = useState<string>("");

    const handleAdd = () => {
        if (input === "") return;
        setTodos([...todos, {id: Date.now(), text: input, done: false}]);
        setInput("");
    }

    const handleDelete = (index : number) => {
        setTodos(todos.filter((_, i) => i !== index));
    }

    return (
        <div>
            <h2>TO DO List with TypeScript</h2>
            
            <input value={input} onChange={(e) => setInput(e.target.value)} 
                 onKeyDown= {(e) => e.key === "Enter" && handleAdd()}
            />

            <button onClick={handleAdd}>
                Add
            </button>

            {
             todos.length === 0 ? (
             <p>No todos yet</p>
            )
              : (
                <ul>
                    {todos.map((todo, index) => {
                    return (
                    <li key={index}>
                        {todo.text}
                        <button onClick= {() => handleDelete(index)}> Delete</button>
                    </li>
                    );
                 })}
           
                </ul>
              )
            }
              
        </div>
    )
}
*/



// MovieList App.tsx

import { useState } from 'react';
import type { Movie } from './Movie';
import MovieList from './MovieList';
import WatchList from './WatchList';

export default function App() {
    const [watchlist, setWatchlist] = useState<Movie[]>([]);

    const handleAdd = (movie: Movie) => {
        setWatchlist([...watchlist, movie]);
    };

    const handleRemove = (id: number) => {
        setWatchlist(watchlist.filter(movie => movie.id !== id));
    };

    return (
        <div>
            <h1>Movie Watchlist</h1>
            <MovieList onAdd={handleAdd} />
            <WatchList watchlist={watchlist} onRemove={handleRemove} />
        </div>
    )
}