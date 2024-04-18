import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";
// const API_KEY = "99e812009a99fcf34621e7514db070e4";
const authToken =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OWU4MTIwMDlhOTlmY2YzNDYyMWU3NTE0ZGIwNzBlNCIsInN1YiI6IjYxYmUyMDhiMTNhZjVmMDA5MmZmYzY1NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sWH8F73vAUa2GKDUYYM3GeOFOZ29T3iiXMKB_7IGxh8";
const options = {
  headers: {
    Authorization: `Bearer ${authToken}`,
  },
};

export const getTrendingMovies = async () => {
  const { data } = await axios.get(
    "trending/movie/day?language=en-US",
    options
  );
  return data;
};
