import "./styles/App/App.css";
import { Routes, Route } from "react-router-dom";
import { GenreProvider } from "./context/GenreListContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import TvShowsPage from "./pages/TvShowsPage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import ActorDetailsPage from "./pages/ActorDetailsPage";
import GenrePage from "./pages/GenrePage";

function App() {
    return (
        <div className="App">
            <GenreProvider>
                <div className="app__navbar">
                    <Navbar />
                </div>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/movies" element={<MoviesPage />} />
                    <Route path="/tv" element={<TvShowsPage />} />
                    <Route path="/:type/:id" element={<MovieDetailsPage />} />
                    <Route path="/actor/:id" element={<ActorDetailsPage />} />
                    <Route path="/:type/genre/:id" element={<GenrePage />} />
                </Routes>
                <div className="app__footer">
                    <Footer />
                </div>
            </GenreProvider>
        </div>
    );
}

export default App;
