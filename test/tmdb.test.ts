import { getPopularMovies } from "../src/lib/tmdb/get.popular.movies";

async function testPopularMovies() {
  try {
    const data = await getPopularMovies(1);
    console.log("✅ Films populaires récupérés :");
    for (const movie of data.results) {
      console.log(movie.backdrop_path);
    }
  } catch (error) {
    console.error("❌ Erreur TMDB :", error);
  }
}

testPopularMovies(); // ✅ active ça

// getPopularMovies(1).then((data) => {
//   console.log(data.results.map((m) => m.title));
// });
