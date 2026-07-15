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
                todos.length === 0 ?
                (
                    <p>No todo yet.</p>
                ) : (  <ul>           
                        {
                            todos.map((todo, index) => (
                            <li key={index}>
                                {todo.text}
                                <button onClick={() => handleDelete(index)}>delete</button>
                            </li>
                            ))
                        }
                        </ul>
                )
            }

              
        </div>
    )
}





// onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}

// onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => e.key === "Enter" && handleAdd()}

//Inline, typescript infer type auto
// onChange = {e => setInput(e.target.value)}
// onKeyDown = {e => e.key === "Enter" && handleAdd()}

// Separate function - needs explicit type
// const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//   setInput(e.target.value);
// };