import './MovieCard.style.css';
import {useNavigate} from 'react-router-dom';
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import toast, {Toaster} from 'react-hot-toast';
import comingSoon from '../assets/coming-soon.png';

const MovieCard = ({ movieDiscover }) => {
  const navigate = useNavigate();
  const {loggedUser, setLoggedUser} = useContext(UserContext);

const handleDetail = (id)=>{
  loggedUser ? navigate(`/moviedetail/${id}`) : toast.error('You need to Login to see the details');
}
  return (
    <div className="card-holder d-flex flex-wrap gap-5 justify-content-center py-5">
      {movieDiscover.map((item, index) => {
        return (
          <section key={index} className="">
          <Toaster position='top-right'/>
          <div className="card col-sm-12 card col-md-6 card col-lg-3" style={{width: '22rem'}} key={index}
          onClick={()=>handleDetail(item.id)}>
          <div className="img-container">
          <img
              src={item.poster_path ? `https://image.tmdb.org/t/p/original/${item.poster_path}`: comingSoon}
              className="card-img-top"
              alt={item.title}
            />
            </div>
            <p className='overview'>{item.overview}</p>
            <div className="card-body bg-primary text-light d-flex justify-content-between">
              <p className="card-text" style={{height: '4rem'}}>{item.title} </p>
              <p><span className="badge bg-danger">{item.vote_average}</span></p>
            </div>
            
          </div>
          </section>
        );
      })}
    </div>
  );
};

export default MovieCard;
