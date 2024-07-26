export type Movie = {
  adult: boolean | null;
  backdrop_path: string | null;
  genre_ids: number[] | null;
  id: number | null;
  original_language: string | null;
  original_title: string | null;
  overview: string | null;
  popularity: number | null;
  poster_path: string | null;
  release_date: string | null;
  title: string | null;
  video: boolean | null;
  vote_average: number | null;
  vote_count: number | null;
};

export type MovieDetailsData = {
  adult: boolean | null;
  backdrop_path: string | null;
  belongs_to_collection: any | null;
  budget: number | null;
  genres:
    | {
        id: number | null;
        name: string | null;
      }[]
    | null;
  homepage: string | null;
  id: number | null;
  imdb_id: string | null;
  origin_country: string[] | null;
  original_language: string | null;
  original_title: string | null;
  overview: string | null;
  popularity: number | null;
  poster_path: string | null;
  production_companies:
    | {
        id: number | null;
        logo_path: string | null;
        name: string | null;
        origin_country: string | null;
      }[]
    | null;

  production_countries:
    | {
        iso_3166_1: string | null;
        name: string | null;
      }[]
    | null;
  release_date: string | null;
  revenue: number | null;
  runtime: number | null;
  spoken_languages:
    | {
        english_name: string | null;
        iso_639_1: string | null;
        name: string | null;
      }[]
    | null;
  status: string | null;
  tagline: string | null;
  title: string | null;
  video: boolean | null;
  vote_average: number | null;
  vote_count: number | null;
};
