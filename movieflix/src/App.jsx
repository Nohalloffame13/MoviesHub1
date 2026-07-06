import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MovieGrid from "./components/MovieGrid";
import Footer from "./components/Footer";
import { useState } from "react";
import movies from "./data";
import MovieCard from "./components/MovieCard";
import Player from "./components/Player";
import "./components/Navbar.css";
import "./components/Hero.css";
import "./components/MovieGrid.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <MovieGrid />
      <Footer />
    </>
  );
}

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
