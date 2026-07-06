import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MovieGrid from "./components/MovieGrid";
import Footer from "./components/Footer";
import PlayerModal from "./components/PlayerModal";

function App(){

const [movie,setMovie]=useState(null);

return(

<>

<Navbar/>

<Hero/>

<MovieGrid
onPlay={setMovie}
/>

<PlayerModal
movie={movie}
onClose={()=>setMovie(null)}
/>

<Footer/>

</>

)

}

export default App;
