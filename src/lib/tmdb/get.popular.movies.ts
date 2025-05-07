import type { PopularMoviesResponse } from "types/tmdb";
import { API_KEY, BASE_URL, DEFAULT_LANGUAGE } from "./config";

export async function getPopularMovies(
  page = 1,
): Promise<PopularMoviesResponse> {
  const res = await fetch(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=${DEFAULT_LANGUAGE}&page=${page}`,
  );

  if (!res.ok) throw new Error("Erreur TMDB");

  return await res.json();
}
