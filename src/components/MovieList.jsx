// ES6/ESM/module project import syntax
import MovieCard from "./MovieCard.jsx";

let favouriteMovies = [
    "Aliens",
    "Dune",
    "Hot Fuzz",
    "Anchorman",
    "Lock stock and 2 smoking barrels",
    "Shrek",
    "Pokemon",
    "Blazing Saddles",
    "Snatch",
    "Shrek 2",
    "The good, the bad and the ugly",
    "Robocop",
    "Bladerunner",
    "Lord of the rings 1-3"
  ];

export default function Movielist(){
    return (
    <section>
        {favouriteMovies.map((movie, index) => {

            // if (movie && movie.length === 0){

            // }

            // if (movie.length !== 0){
            //     return <MovieCard key={movie + "-" + index} elephant={movie}/>
            // }

            if (movie.length === 0){
                return null;
            }

            return <MovieCard key={movie + "-" + index} elephant={movie}/>
        })}
    </section>

    );

    
};