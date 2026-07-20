import { useNotelist } from './NoteContext'
import { useState } from 'react';

export default function NoteList() {
    const [searchInput, setSearchInput] = useState<string>('');

    const { notelist, dispatch } = useNotelist();

    const filtered = notelist.filter(note => 
        note.title.toLowerCase().includes(searchInput.toLowerCase())
    );

    return (
        <div>
            <input
            placeholder="Search by title..."
            value={searchInput}
            onChange={e => setSearchInput(e.target.value)}
            style={{ width: '100%', padding: '8px', marginBottom: '16px', borderRadius: '4px', border: '1px solid #ccc' }}
            />
            {filtered.length === 0 ? (
            <p>No notes found.</p>
            ) : (
            filtered.map(note => (
                <div key={note.id} style={{ border: '1px solid #170000', borderRadius: '8px', padding: '12px', marginBottom: '8px' }}>
                    <h3 style={{ margin: '0 0 8px 0' }}>{note.title}</h3>
                    <p style={{ margin: '0 0 8px 0' }}>{note.content}</p>
                    <button onClick={() => dispatch({ type: 'REMOVE', payload: note.id })}>Delete</button>
                </div>
                ))
            )}
    </div>
    );
}