import "dotenv/config";

const apiKey = process.env.TMDB_API_KEY;

async function testResponse() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=fr-FR&page=1`,
  );

  const data = await res.json();
  console.log(JSON.stringify(data, null, 2)); // pour bien voir
}

testResponse();
