import movies from "../data/movies";
import MovieCard from "./MovieCard";

export default function MovieGrid({ onPlay }) {

return(

<section className="movies">

<h2>🔥 Trending Movies</h2>

<div className="grid">

{

movies.map(movie=>

<MovieCard
key={movie.id}
movie={movie}
onPlay={onPlay}
/>

)

}

</div>

</section>

)

}
