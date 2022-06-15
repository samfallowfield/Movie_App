import base_axios from "axios";
// import "../Css/PostMovie.css";

function PostMovie(props) {
  const addTocollection = (movie) => {
    base_axios.post(`http://localhost:3000/movies`, {
      id: movie.id,
      title: movie.title,
      overview: movie.overview,
      poster_path: movie.poster_path,
      release_date: movie.release_date.toString(),
    });
  };

  const deleteMovie = (movie) => {
    base_axios.delete(`http://localhost:3000/movies/${movie.id}`);
  };

  return (
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
  );
}
export default PostMovie;
