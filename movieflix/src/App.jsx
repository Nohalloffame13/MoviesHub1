import { useState } from "react";
import movies from "./data";
import MovieCard from "./components/MovieCard";
import Player from "./components/Player";

export default function App() {

const [selected, setSelected] = useState(null);

return (

<div style={{padding:20}}>

<h1>My Movies</h1>

<div style={{
display:"flex",
gap:20,
flexWrap:"wrap"
}}>

{movies.map(movie=>(
<MovieCard
key={movie.id}
movie={movie}
onOpen={setSelected}
/>
))}

</div>

<Player movie={selected}/>

</div>

);

}