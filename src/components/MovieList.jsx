import { useEffect, useState } from "react"

export default function MovieList() {

  const [ movies, setMovies ] = useState([]);
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    try {
      fetch('https://api.themoviedb.org/3/movie/popular?api_key=')
        .then(response => response.json())
        .then(data => {
          setMovies(data.results);
          setLoading(false);
        });
    } catch (error) {
      console.log("There was an error fetching the data")
    }
  }, []);

  return (
    <div>
      {movies.map(({id, title}) => (
        <div key={id}>
          <h2>{title}</h2>
        </div>
      ))}
    </div>
  )
}
