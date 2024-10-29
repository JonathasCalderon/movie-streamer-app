import Footer from "./components/Footer";
import Header from "./components/Header";
import MovieList from "./components/MovieList";

const MOVIES = [
  {
    id: 1,
    title: "The Godfather"
  },
  {
    id: 2,
    title: "Fight Club"
  },
  {
    id: 3,
    title: "Donnie Darko"
  }
]

function App() {
  return (
    <div>
      <Header title="Movie Streamer App"/>
      <MovieList movies={MOVIES}/>
      <Footer message="All rights reserved 2024"/>
    </div>
  )
}

export default App;
