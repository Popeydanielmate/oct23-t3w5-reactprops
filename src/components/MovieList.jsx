

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
            return <MovieCard key={index} elephant={movie}/>
        })}
    </section>

    );

    
};