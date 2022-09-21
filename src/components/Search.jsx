import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "../styles/Search/Search.css";

function Search(props) {
    const { setSearchParams, executeSearch } = props;

    return (
        <div className="search__container">
            <SearchIcon
                className="search__icon"
                onClick={() => executeSearch()}
            />
            <input
                type="text"
                placeholder="Search for your favourite content."
                onChange={(e) => {
                    setSearchParams(e.target.value);
                }}
            />
        </div>
    );
}

export default Search;
