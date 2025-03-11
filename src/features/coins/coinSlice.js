import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import coinService from "./coinService";

const coinSlice = createSlice({
  name: "coin",
  initialState: {
    trendingCoins: [],
    coins: [],
    coin: {},
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTrendingCoins.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(getTrendingCoins.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.trendingCoins = action.payload;
        state.isError = false;
      })
      .addCase(getTrendingCoins.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
      })
      .addCase(getSearchedCoin.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(getSearchedCoin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.coins = action.payload;
        state.isError = false;
      })
      .addCase(getSearchedCoin.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
      })
      .addCase(getCoinDetails.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(getCoinDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.coin = action.payload;
        state.isError = false;
      })
      .addCase(getCoinDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
      });
  },
});

export default coinSlice.reducer;

// Get trending coins
export const getTrendingCoins = createAsyncThunk(
  "FETCH/TRENDIND_COINS",
  async () => {
    try {
      return await coinService.fetchTrendingCoins();
    } catch (error) {
      console.log(error);
    }
  }
);

// Search  coin
export const getSearchedCoin = createAsyncThunk(
  "FETCH/SEARCHED_COIN",
  async (searchTerm) => {
    try {
      return await coinService.searchCoins(searchTerm);
    } catch (error) {
      console.log(error);
    }
  }
);

// Get  coin
export const getCoinDetails = createAsyncThunk("FETCH/COIN", async (id) => {
  try {
    return await coinService.fetchCoinDetails(id);
  } catch (error) {
    console.log(error);
  }
});
