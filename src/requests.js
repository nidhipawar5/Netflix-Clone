const API_KEY ="b79a9fd7b9923e562ba671c1f50cd8ca";

const requests = {
    fetchTrendings: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `discover/movie?api_key=${API_KEY}&{API_KEY}&with_genres=28`,
    fetchComedyMovies: `discover/movie?api_key=${API_KEY}&{API_KEY}&with_genres=35`,
    fetchHorrorMovies: `discover/movie?api_key=${API_KEY}&{API_KEY}&with_genres=27`,
    fetchRomanceMovies: `discover/movie?api_key=${API_KEY}&{API_KEY}&with_genres=10749`,
    fetchDocumentries: `discover/movie?api_key=${API_KEY}&{API_KEY}&with_genres=99`,
 
}

export default requests;