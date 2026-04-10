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
    // Pas de backend : on pourrait logguer ou simplement ne rien faire
    // alert(`Recherche pour : ${query}`);
  };

  return (
    <div style={{ maxWidth: 400, margin: '40px auto', padding: 20, border: '1px solid #ddd', borderRadius: 8, textAlign: 'center' }}>
      <h1>Movie Search</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={e => {
            setQuery(e.target.value);
            if (error) {
              setError('');
            }
          }}
          placeholder="Enter movie title"
          style={{ padding: 8, width: '70%', marginRight: 8 }}
        />
        <button type="submit" style={{ padding: '8px 16px' }}>Search</button>
      </form>
      {error && (
        <p style={{ color: 'red', marginTop: 8 }}>{error}</p>
      )}
    </div>
  );
}

export default App;
