import axios from "axios";

const fetchTrendingCoins = async () => {
  const response = await axios.get(
    "https://api.coingecko.com/api/v3/search/trending"
  );
  return response.data.coins;
};

const searchCoins = async (searchTerm) => {
  const response = await axios.get(
    `https://api.coingecko.com/api/v3/search?query=${searchTerm}`
  );
  return response.data.coins;
};

const fetchCoinDetails = async (id) => {
  const response = await axios.get(
    `https://api.coingecko.com/api/v3/coins/${id}`
  );
  return response.data;
};

const coinService = { fetchTrendingCoins, searchCoins, fetchCoinDetails };

export default coinService;
