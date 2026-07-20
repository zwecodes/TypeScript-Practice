import { useState } from 'react';
import { useNotelist } from './NoteContext'


export default function NoteForm() {
    const [title, setTitle] = useState<string>('');
    const [content, setContent] = useState<string>('');

    const { dispatch } = useNotelist();

    const handleSubmit = () => {
        if (title === '' || content === '') return;
        dispatch({ type: 'ADD', payload: {id: Date.now(), title, content} })
        setTitle('');
        setContent('');
    };

    return(
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
            <input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
            <br />
            <textarea placeholder="Content" value={content} onChange={e => setContent(e.target.value)} rows={4} />
            <button onClick={handleSubmit}>submit</button>
        </div>
    )
}
