import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterState {
  categories: string[];
  search: string;
}

const initialState: FilterState = {
  categories: [],
  search: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    categoryFilter: (state, action: PayloadAction<{ filter: string }>) => {
      const index = state.categories.findIndex(
        (category) => category === action.payload.filter
      );
      if (index === -1) {
        state.categories.push(action.payload.filter);
      } else {
        state.categories.splice(index, 1);
      }
    },
    searchFilter: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
  },
});

export const { categoryFilter, searchFilter } = filterSlice.actions;

export default filterSlice.reducer;
