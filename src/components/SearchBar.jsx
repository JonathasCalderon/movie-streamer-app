import { useState } from 'react';

function SearchBar() {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Buscando: ${query}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar películas..."
      />
      <button type="submit">Buscar</button>
    </form>
  );
}

export default SearchBar;

