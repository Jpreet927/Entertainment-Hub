import React from "react";
import { Pagination } from "@mui/material";
import "../styles/Pagination/Pagination.css";

export default function CustomPagination({ setPage, numOfPages = 10 }) {
    const handlePageChange = (page) => {
        setPage(page);
        window.scroll(0, 0);
    };

    return (
        <div
            style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                marginTop: 10,
                color: "primary",
            }}
        >
            <Pagination
                onChange={(e) => handlePageChange(e.target.textContent)}
                count={numOfPages}
            />
        </div>
    );
}
