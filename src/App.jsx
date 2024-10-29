import Footer from "./components/Footer";
import Header from "./components/Header";
import MovieList from "./components/MovieList";

function App() {
  return (
    <div>
      <Header title="Movie Streamer App"/>
      <MovieList/>
      <Footer message="All rights reserved 2024"/>
    </div>
  )
}

export default App;
