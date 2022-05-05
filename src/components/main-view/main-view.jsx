import React from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";


export class MainView extends React.Component {

  constructor() {
    super();
    this.state = {
      movies: [
        { _id: 1, Title: "Malcolm X", Year: "1992", Description: "Biographical epic of the controversial...", Genre: "Drama", Director: "Spike Lee", ImagePath: "..." },
        { _id: 2, Title: "Furious 7", Year: "2015", Description: "Dom, Brian and the team have returned...", Genre: "Adventure", Director: "James Wan", ImagePath: "..." },
        { _id: 3, Title: "The Old Guard", Year: "2020", Description: "A covert team of immortal mercenaries...", Genre: "Action", Director: "Gina Prince-Bythewood", ImagePath: "..." }
      ],
      selectedMovie: null
    };
  }

  setSelectedMovie(newSelectedMovie) {
    this.setState({
      selectedMovie: newSelectedMovie
    });
  }

  render() {
    const { movies, selectedMovie } = this.state;

    // if (selectedMovie) return <MovieView movieData={selectedMovie} />;

    if (movies.length === 0) return <div className="main-view">The list is empty</div>;

    return (
      <div className="main-view">
        {selectedMovie
          ? <MovieView movieData={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }} />
          : movies.map(movie => (
            <MovieCard key={movie._id} movieData={movie} onMovieClick={(movie) => { this.setSelectedMovie(movie) }} />
          ))
        }
      </div>
    );
  }
}