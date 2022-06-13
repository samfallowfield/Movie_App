// import React, { useState } from "react";
// import axios from "axios";

// const baseURL = "http://localhost:3000/movies";

// export default function PostMovie() {
//   const [title, setTitle] = useState("");
//   const [overview, setOverview] = useState("");
//   const [poster_path, setPoster_path] = useState("");
//   const [release_date, setRelease_date] = useState("");

//   const onCreatePost = async () => {
//     const PostData = new Object();
//       PostData[title] = setTitle,
//       PostData[poster_path] = setPoster_path,
//       PostData[overview] = setOverview,
//       PostData[release_date] = setRelease_date,
//       console.log(title, overview, poster_path, release_date);

//       const PostDatajson = JSON.stringify(PostData);

//     await axios.post(baseURL, PostDatajson);

//     try {
//       make axios post request
//       const response = await axios({
//         method: "post",
//         url: baseURL,
//         data: PostData,
//         headers: { "Content-Type": "application/json" },
//       });
//       console.log("looks like this has been submitted");
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const submitData = (e) => {
//       if (title && release_date && poster_path && overview){
//         onCreatePost();
//       }else{
//         console.log("failed to submit");
//       }
//     };

//   return (
//     <div>
//       <button onClick={onCreatePost}>Submit</button>
//     </div>
//   );
// }
// }
