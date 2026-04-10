import React, { useState } from 'react';

function App() {
    const [query, setQuery] = useState('');
    const [error, setError] = useState('');

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (!query.trim()) {
            setError('Please enter a movie name');
            return;
        }
        setError('');
        // No backend, so just alert or do nothing
        alert(`Searching for: ${query}`);
    };

    return (
        <div style={{ maxWidth: 400, margin: '40px auto', padding: 20, border: '1px solid #ddd', borderRadius: 8, textAlign: 'center' }}>
            <h1>Movie Search</h1>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    value={query}
                    onChange={e => { setQuery(e.target.value); setError(''); }}
                    placeholder="Enter movie title"
                    style={{ padding: 8, width: '70%', marginRight: 8 }}
                />
                <button type="submit" style={{ padding: '8px 16px' }}>Search</button>
            </form>
            {error && <p style={{ color: 'red', marginTop: 8 }}>{error}</p>}
        </div>
    );
}

export default App;
