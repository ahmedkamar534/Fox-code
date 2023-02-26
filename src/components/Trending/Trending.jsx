import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Trending() {
  //imgprefix
  const imgPrefix = "https://image.tmdb.org/t/p/w500";

  //source
  const [movieId, setmovieId] = useState("");
  const [tvId, settvId] = useState("");
  const [personId, setpersonId] = useState("");

  //trending
  const [trendingMovies, settrendingMovies] = useState([]);
  const [trendingTVshows, settrendingTVshows] = useState([]);
  const [trendingPeople, settrendingPeople] = useState([]);

  //fun
  async function getTrending(mediaType, callBack) {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=fd292faec88bb4e94368527e7aba899b`
    );
    callBack(data.results.slice(0, 10));
  }
  useEffect(() => {
    getTrending("movie", settrendingMovies);
    getTrending("tv", settrendingTVshows);
    getTrending("person", settrendingPeople);
  }, []);

  async function pop(media, id, callBack) {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/${media}/${id}?api_key=fd292faec88bb4e94368527e7aba899b`
    );
    callBack(data);
  }

  function getId(e) {
    pop("movie", e.target.name, setmovieId);
  }

  function tvI(e) {
    pop("tv", e.target.name, settvId);
  }
  function perId(e) {
    pop("person", e.target.name, setpersonId);
  }
  console.log(movieId);

  //return

  return (
    <div className="Trending">
      {movieId ? (
        <div className="films row  ">
          <div className="col-6">
            <div className="source ">
              <img
                className="w-100"
                src={`${imgPrefix}${movieId.poster_path}`}
                alt=""
              />
            </div>
          </div>
          <div className="col-6 position-relative ">
            <div className="w-100">
              <h4 className="text-center mb-5 h5 "> {movieId.title}</h4>

              <p>Tagline : {movieId.tagline}</p>
              <p>Film Budget : ${movieId.budget}</p>
              <p className="">Language : {movieId.original_language}</p>

              <p>vote_average : {movieId.vote_average}</p>
              <p>vote_count: {movieId.vote_count}</p>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      <div className="row my-5 py-3">
        <div className="col-md-4">
          <div className="brdr w-25 my-4"></div>
          <h2 className="h4">
            Trending Movies <br />
            To Watch <br /> Right Now
          </h2>
          <p className="text-muted my-3">trending movies to watch </p>
          <div className="brdr w-100 my-4"></div>
        </div>
        {trendingMovies.map((movie, i) => (
          <div key={i} className="col-6 col-md-4 col-lg-2 co-xl-2">
            <div className="movie">
              <img
                onClick={getId}
                name={movie.id}
                src={`${imgPrefix}${movie.poster_path}`}
                alt={movie.title}
                className="w-100"
              />
              <h3 className="h6 my-3">{movie.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* asas
      asasa
      asasas
      asasaasas
      assasasasa
       */}
      {tvId ? (
        <div className="tvs row ">
          <div className="col-6">
            <div className="source">
              <img
                className="w-100"
                src={`${imgPrefix}${tvId.poster_path}`}
                alt=""
              />
            </div>
          </div>
          <div className="col-6 position-relative ">
            <div className="w-100">
              <h4 className="text-center mb-5 "> {tvId.name}</h4>

              <p>Tagline : {tvId.tagline}</p>
              <p>Number of opisode : {tvId.number_of_episodes}</p>
              <p className="">Language : {tvId.original_language}</p>

              <p>vote_average : {tvId.vote_average}</p>
              <p>vote_count: {tvId.vote_count}</p>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      {/* asasaa */}
      <div className="row my-5 py-3">
        <div className="col-md-4">
          <div className="brdr w-25 my-4"></div>
          <h2 className="h4">
            Trending TV <br />
            To Watch <br /> Right Now
          </h2>
          <p className="text-muted my-3">trending TV to watch </p>
          <div className="brdr w-100 my-4"></div>
        </div>
        {trendingTVshows.map((movie, i) => (
          <div key={i} className="col-6 col-md-4 col-lg-2 co-xl-2">
            <div className="movie">
              <img
                onClick={tvI}
                name={movie.id}
                src={`${imgPrefix}${movie.poster_path}`}
                alt={movie.name}
                className="w-100"
              />
              <h3 className="h6 my-3">{movie.name}</h3>
            </div>
          </div>
        ))}
      </div>
      {/* asasaasasa
<a href="a
aa
a
a
a
a
a

a"></a> */}
      {personId ? (
        <div className="peoples row ">
          <div className="col-6">
            <div className="source">
              <img
                className="w-100"
                src={`${imgPrefix}${personId.profile_path}`}
                alt=""
              />
            </div>
          </div>
          <div className="col-6 position-relative">
            <div className=" w-100">
              <h4 className="text-center mb-5 "> {personId.name}</h4>
              <p className="mb-5">birthday : {personId.birthday}</p>
              <p>Place of birth : {personId.place_of_birth}</p>
              <p>Popularity : {personId.popularity}</p>
              <p className="">
                Known for department : {personId.known_for_department}
              </p>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      <div className="row my-5 py-3">
        <div className="col-md-4">
          <div className="brdr w-25 my-4"></div>
          <h2 className="h4">
            Trending Actors <br />
            To Watch <br /> Right Now
          </h2>
          <p className="text-muted my-3">trending Actors to watch </p>
          <div className="brdr w-100 my-4"></div>
        </div>
        {trendingPeople.map((movie, i) => (
          <div key={i} className="col-6 col-md-4 col-lg-2 co-xl-2">
            <div className="movie">
              <img
                onClick={perId}
                name={movie.id}
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
