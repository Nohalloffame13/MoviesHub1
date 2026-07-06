import { FaPlay } from "react-icons/fa";

export default function MovieCard({ movie, onPlay }) {

return(

<div
className="movie-card"
onClick={()=>onPlay(movie)}
>

<img
src={movie.poster}
alt={movie.title}
/>

<div className="movie-info">

<h3>{movie.title}</h3>

<p>{movie.category}</p>

<div className="bottom">

<span>⭐ {movie.rating}</span>

<button>

<FaPlay/>

</button>

</div>

</div>

</div>

)

}
