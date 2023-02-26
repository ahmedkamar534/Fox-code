import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Actors() {
  let imgPrefix = "https://image.tmdb.org/t/p/w500";
  const [trp, settrp] = useState([]);

  async function top_rated() {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/person/popular?api_key=fd292faec88bb4e94368527e7aba899b`
    );
    settrp(data.results);
  }
  useEffect(() => {
    top_rated();
  }, []);

  return (
    <div className="Actors">
      <h1 className="text-center my-5 py-5">Top Raterd Actors</h1>
      <div className="row my-5 py-3">
        {trp.map((movie, i) => (
          <div key={i} className="col-6 col-md-4 col-lg-2 co-xl-2">
            <div className="movie">
              <img
                src={`${imgPrefix}${movie.profile_path}`}
                alt={movie.name}
                className="w-100"
              />
              <h3 className="h6 my-3">{movie.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
