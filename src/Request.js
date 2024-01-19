const key = "1dd223a97b9eeeadbb0bccea537d6511";

const requests = {
  requestsPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  requestsTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  requestsTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
  requestsShows: `https://api.themoviedb.org/3/discover/tv?api_key=${key}&language=en-US&page=1`,
  requestsAction: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=28`,
  requestsComedy: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=35`,
  requestsRomance: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=10749`,
  requestsHorror: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=27`,
  requestsUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
};

export default requests;
