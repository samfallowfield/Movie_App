import base_axios from "axios";
import "../Css/MovieManagement.css";

function MovieManagement(props) {

  const setSeen = (movie) => {
    base_axios.patch(`http://localhost:3000/movies/${movie.id}`, {
      id: movie.id,
      title: movie.title,
      overview: movie.overview,
      poster_path: movie.poster_path,
      release_date: movie.release_date,
      seen: true,
    });
  };


  const addTocollection = (movie) => {
    base_axios.post(`http://localhost:3000/movies`, {
      id: movie.id,
      title: movie.title,
      overview: movie.overview,
      poster_path: movie.poster_path,
      release_date: movie.release_date.toString(),
      seen: false,
    });
  };

  const deleteMovie = (movie) => {
    base_axios.delete(`http://localhost:3000/movies/${movie.id}`);
  };


  const handleDeleteMovie = (deleteMovie) => {
    if (deleteMovie) {
    }
    }

  return (
    <div className="movieManagement">
      <div className="postButtonContainer">
        {props.buttonStateForChildren === "Add" ? (
          <button
            className="postButton"
            onClick={() => addTocollection(props.movie)}
          >
            Add to collection
          </button>
        ) : (
          <button
            className="deleteButton"
            onClick={() => deleteMovie(props.movie)}
          >
            Delete from collection
          </button>
        )}
      </div>
      <div className="MarkAsSeenButtonContainer">
        {props.buttonStateWatched === "Watched" ? (
          <button
            className="updateButton"
            onClick={() => setSeen(props.movie)}
          >
            Mark as seen
          </button>
        ) : ( 
          "")}
                
        
         </div>
    </div>
  );
}
export default MovieManagement;
