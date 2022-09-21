import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ActorDetailsPage() {
    const params = useParams();
    const [actorDetails, setActorDetails] = useState({});

    const getActorDetails = async () => {
        let response = await axios.get(
            `https://api.themoviedb.org/3/person/${params.id}?api_key=${process.env.REACT_APP_TMDB_API}&language=en-US`
        );

        setActorDetails(response.data);
    };

    useEffect(() => {
        getActorDetails();
    }, []);

    return <div>ActorDetailsPage</div>;
}

export default ActorDetailsPage;
