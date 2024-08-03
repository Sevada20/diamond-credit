import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit";
import { $api } from "@/api/axiosInstance";

const initialState = {
  contracts: [],
  currentPage: 1,
  totalPages: 1,
  activeContracts: null,
  executedContracts: null,
  allContracts: null,
  loading: false,
  error: null,
  filters: {
    status: "",
  },
};

export const getContracts = createAsyncThunk(
  "contracts/getContracts",
  async ({ page, filters }, { rejectWithValue }) => {
    try {
      const response = await $api.get("get-contracts", {
        params: { page, limit: 6, ...filters },
      });
      console.log(response.data, "response.data>>>>>");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const contractsSlice = createSlice({
  name: "contracts",
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setFilterStatus: (state, action) => {
      state.filters.status = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getContracts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getContracts.fulfilled, (state, action) => {
        state.loading = false;
        state.contracts = action.payload.contracts.data;
        state.currentPage = action.payload.contracts.current_page;
        state.totalPages = action.payload.contracts.last_page;
        state.allContracts = action.payload.counts.all;
        state.activeContracts = action.payload.counts.active;
        state.executedContracts = action.payload.counts.executed;
      })
      .addCase(getContracts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      });
  },
});

export const { setCurrentPage, setFilterStatus } = contractsSlice.actions;

export const selectContractsData = createSelector(
  (state) => state.contracts.contracts,
  (state) => state.contracts.currentPage,
  (state) => state.contracts.totalPages,
  (state) => state.contracts.loading,
  (state) => state.contracts.error,
  (state) => state.contracts.allContracts,
  (state) => state.contracts.activeContracts,
  (state) => state.contracts.executedContracts,
  (state) => state.contracts.filters.status,
  (
    contracts,
    currentPage,
    totalPages,
    loading,
    error,
    allContracts,
    activeContracts,
    executedContracts,
    filterStatus
  ) => ({
    contracts,
    currentPage,
    totalPages,
    filterStatus,
    loading,
    error,
    allContracts,
    activeContracts,
    executedContracts,
  })
);

export default contractsSlice.reducer;
