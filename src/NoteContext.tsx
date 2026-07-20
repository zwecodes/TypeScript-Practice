import { createContext, useReducer, useContext } from 'react';
import type { Note } from './Note';

type Action = 
| { type: "ADD"; payload: Note }
| { type: "REMOVE"; payload: number };

type NotelistContextType = {
    notelist: Note[];
    dispatch: React.Dispatch<Action>;
};

const NotelistContext = createContext<NotelistContextType | null>(null);

const reducer = (state: Note[], action: Action): Note[] => {
    switch(action.type) {
        case "ADD":
            return [...state, action.payload];
        case "REMOVE":
            return state.filter(note => note.id !== action.payload);
        default: 
            return state;
    }
};

export function NotelistProvider({ children }: {children: React.ReactNode}) {
    const [notelist, dispatch] = useReducer(reducer, []);

    return (
        <NotelistContext.Provider value={{ notelist, dispatch}}>
            {children}
        </NotelistContext.Provider>
    );
}

export function useNotelist() {
    const context = useContext(NotelistContext);
    if (!context) throw new Error ("useNotelist must be inside NotelistProvider")
    return context;
}