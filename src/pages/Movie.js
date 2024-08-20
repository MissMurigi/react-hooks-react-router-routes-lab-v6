import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {
  const [movie ,setMovie] = useState(null)
  const { id } = useParams()

  useEffect(() => {
     fetch(`http://localhost:4000/movies/${id}`)
       .then((res) => res.json())
       .then((data) => {
         setMovie(data);
       })
       .catch((err) => console.error(err));
  }, [id])

  if(!movie)return <h2>Loading...</h2>

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>{movie.time}</p>
        {movie.genres.map((genre) => {
        <span 
        key={genre}
        >{genre}</span>;
        })}

      </main>
    </>
  );
};

export default Movie;