import axios from "axios";

const baseURL = "https://api.themoviedb.org/3/";

export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMmM2OGZhMTc3ZWVjYTI2Y2JiMTg5ZTVmZGExMWE1NiIsIm5iZiI6MTcyMTI0MjAwNC4wMTUzNywic3ViIjoiNjY5ODA4NmYwMzViYjY3NmFjZTgxZDljIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.ff7yZcVi5SVoKzSdmuh23UAkfcE1C5tKSFMjaInOh6o",
  },
};
// faire une methode search movies et load popular movies

export async function searchMovie(query: string) {
  const url = `${baseURL}search/movie?query=${query}&include_adult=false&language=en-US&page=1`;
  try {
    const r = await axios.get(url, options);
    console.log(r);
    return r.data.results;
  } catch (e) {
    console.log(e);
  }
}

export async function loadPopularMovies() {
  const url = `${baseURL}movie/popular?language=en-US&page=1`;
  try {
    const r = await axios.get(url, options);
    console.log(r);
    return r.data.results;
  } catch (e) {
    console.log(e);
  }
}

export async function getDetailsById(id: number) {
  const url = `${baseURL}movie/${id}?language=en-US`;
  try {
    const r = await axios.get(url, options);
    console.log(r);
    return r.data;
  } catch (e) {
    console.log(e);
  }
}
// const handleClick = () => {
//   axios
//     .get(
//       `https://api.themoviedb.org/3/movie/${data.id}?language=en-US`,
//       options
//     )
//     .then(function (response) {
//       props.setDetails(response.data.results);
//       console.log(response);
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// };

// export default async function calls(query: string) {
//   const url = query
//     ? `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`
//     : "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
//   try {
//     const r = await axios.get(url, options);
//     console.log(r);
//     return r.data.results;
//   } catch (e) {
//     console.log(e);
//   }
// }
