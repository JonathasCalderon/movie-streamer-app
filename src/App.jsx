import Footer from "./components/Footer";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div>
      <Header title="Movie Streamer App"/>
      <SearchBar />
      <MovieList/>
      <Footer message="All rights reserved 2024"/>
    </div>
  )
}

export default App;
