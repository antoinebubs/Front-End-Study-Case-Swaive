import axios from "axios";

const baseURL = "https://api.themoviedb.org/3/";

const { REACT_APP_JWT_TOKEN } = process.env;

export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${REACT_APP_JWT_TOKEN}`,
  },
};

export async function searchMovie(query: string) {
  const url = `${baseURL}search/movie?query=${query}&include_adult=false&language=en-US&page=1`;
  try {
    const r = await axios.get(url, options);
    return r.data.results;
  } catch (e) {
    console.log(e);
  }
}

export async function loadPopularMovies() {
  const url = `${baseURL}movie/popular?language=en-US&page=1`;
  try {
    const r = await axios.get(url, options);
    return r.data.results;
  } catch (e) {
    console.log(e);
  }
}

export async function getDetailsById(id: number) {
  const url = `${baseURL}movie/${id}?language=en-US`;
  try {
    const r = await axios.get(url, options);
    return r.data;
  } catch (e) {
    console.log(e);
  }
}
