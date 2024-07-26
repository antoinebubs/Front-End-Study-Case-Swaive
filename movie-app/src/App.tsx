import { useEffect, useMemo, useState } from "react";
import "./App.css";
import MovieCard from "./components/MovieCard";
import {
  Box,
  Stack,
  Backdrop,
  CircularProgress,
  Typography,
} from "@mui/material";
import MovieDetails from "./components/MovieDetails";
import { getDetailsById, loadPopularMovies, searchMovie } from "./ApiServices";
import { MovieDetailsData } from "./types/Movie";
import SearchAppBar from "./components/NavBar";

const minLengthSearch = 3;

function App() {
  const [result, setResult] = useState<any[]>([]);
  const [detailsId, setDetailsId] = useState<number | null>(null);
  const [query, setQuery] = useState("");
  const [popularMovies, setPopularMovies] = useState<any[]>([]);
  const [movieDetails, setMovieDetails] = useState<MovieDetailsData | null>(
    null
  );
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (query.length > minLengthSearch) {
      setLoading(true);
      searchMovie(query).then((res) => {
        setResult(res);
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, [query]);

  useEffect(() => {
    loadPopularMovies().then((res) => setPopularMovies(res));
  }, []);

  useEffect(() => {
    if (detailsId) {
      if (movieDetails?.id === detailsId) {
        return;
      }
      setMovieDetails(null);
      getDetailsById(detailsId).then((res) => {
        setMovieDetails(res);
      });
    }
  }, [detailsId, movieDetails?.id]);

  const movieList = useMemo(
    () => (query.length < minLengthSearch ? popularMovies : result),
    [result, popularMovies, query]
  );

  const isDrawerOpen = Boolean(detailsId);

  const handleClose = () => {
    setDetailsId(null);
    setMovieDetails(null);
  };

  return (
    <div className={`App ${isDrawerOpen ? "content-shift" : ""}`}>
      <SearchAppBar
        query={query}
        setQuery={setQuery}
        drawerOpen={isDrawerOpen}
      />{" "}
      <Stack
        display={"flex"}
        width={"100%"}
        sx={{ backgroundColor: "black", paddingTop: "64px" }}
      >
        <Box
          sx={{
            display: "flex",
            direction: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            padding: 2,
          }}
        >
          {loading ? (
            <Stack
              sx={{
                height: "100%",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CircularProgress color="inherit" />
              <Typography color="white" sx={{ marginTop: 2 }}>
                Searching...
              </Typography>
            </Stack>
          ) : movieList.length > 0 ? (
            movieList.map((x) => (
              <MovieCard
                key={x.id}
                data={x}
                onClick={() => {
                  setDetailsId(x.id);
                }}
              />
            ))
          ) : query.length > minLengthSearch && !loading ? (
            <Typography color="white">No results found</Typography>
          ) : null}
        </Box>

        {detailsId && (
          <>
            <MovieDetails movie={movieDetails} setDetailsId={setDetailsId} />
            <Backdrop
              sx={{
                color: "#fff",
                zIndex: (theme) => theme.zIndex.drawer - 1,
              }}
              open={Boolean(detailsId)}
              onClick={handleClose}
            />
          </>
        )}
      </Stack>
    </div>
  );
}

export default App;
