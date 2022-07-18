import { useParams } from "react-router";
import axios from "axios";
import { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import comingSoon from '../assets/coming-soon.png';
import './MovieDetail.style.css';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState("");
  const API_KEY = process.env.REACT_APP_API_KEY;
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;

  const getMovie = async () => {
    try {
      const { data } = await axios.get(url);
      setMovie(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovie();
  }, [id]);

  return (
    <article>
      <h2 className="text-center pt-4">{movie.title}</h2>
      <div className="card mb-3 mx-auto" style={{ maxWidth: "840px" }}>
        <div className="row g-0">
          <div className="col-md-6">
            <img
              src={movie.poster_path ? `https://image.tmdb.org/t/p/original/${movie.poster_path}` : comingSoon}
              className="img-fluid rounded-start"
              alt={movie.title}
            />
          </div>
          <div className="col-md-6 right-side">
            <div className="card-body d-flex flex-column justify-content-between">
            <div className="top-part">
              <h5 className="card-title">Overview</h5>
              <p className="card-text">
                {movie.overview}
              </p>
              </div>
              <div className="bottom-part">
              <p className="card-text">Release Date: {movie.release_date}</p>
              <p className="card-text">Rate: {movie.vote_average}</p>
              <p className="card-text">Total Votes: {movie.vote_count}</p>
              <Link to='/'>Go Back</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default MovieDetail;
