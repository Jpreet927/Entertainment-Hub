import "./styles/App/App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import TvShowsPage from "./pages/TvShowsPage";
import SearchPage from "./pages/SearchPage";
import MovieDetailsPage from "./pages/MovieDetailsPage";

function App() {
    return (
        <div className="App">
            <div className="app__navbar">
                <Navbar />
            </div>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/movies" element={<MoviesPage />} />
                <Route path="/tv" element={<TvShowsPage />} />
                <Route path="/:type/:id" element={<MovieDetailsPage />} />
            </Routes>
            <div className="app__footer">
                <Footer />
            </div>
        </div>
    );
}

export default App;
