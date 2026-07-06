import movies from "../data/movies";
import MovieCard from "./MovieCard";
import "./MovieGrid.css";

export default function MovieGrid(){

return(

<section className="movies">

<h2>🔥 Trending Movies</h2>

<div className="grid">

{

movies.map(movie=>

<MovieCard
key={movie.id}
movie={movie}
/>

)

}

</div>

</section>

)

}
