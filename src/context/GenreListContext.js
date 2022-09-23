import React, { useState, useContext, createContext } from "react";

// used to store mapping of genre id's to names
const GenreContext = createContext();

export function GenreProvider({ children }) {
    const [genreMap, setGenreMap] = useState({});

    return (
        <GenreContext.Provider value={{ genreMap, setGenreMap }}>
            {children}
        </GenreContext.Provider>
    );
}

export function useGenreContext() {
    return useContext(GenreContext);
}
