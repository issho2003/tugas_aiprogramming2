import Result from "@/components/Result";

const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }) {
  const genre = searchParams?.genre || "fetchNowPlaying"; // Default: Now Playing

  let endpoint = "/movie/now_playing"; // Default ke Now Playing

  if (genre === "fetchTrending") {
    endpoint = "/trending/all/week";
  } else if (genre === "fetchTopRated") {
    endpoint = "/movie/top_rated";
  } else if (genre === "fetchPopular") {
    endpoint = "/movie/popular";
  } else if (genre === "fetchUpcoming") {
    endpoint = "/movie/upcoming";
  }

  const res = await fetch(
    `https://api.themoviedb.org/3${endpoint}?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );

  const data = await res.json();

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const results = data.results;
  console.log(results);

  return (
    <div>
      <Result results={results} />
    </div>
  );
}
