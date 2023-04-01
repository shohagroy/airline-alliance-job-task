import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  displayAirlines: [],
  allAirlines: [],
  activeAirline: "",
};

const airlineSlice = createSlice({
  name: "airline",
  initialState,
  reducers: {
    getAllAirlines: (state, action) => {
      state.displayAirlines = action.payload;
      state.allAirlines = action.payload;
      state.activeAirline = "all";
    },

    airlineSortByDisplay: (state, action) => {
      if (action.payload === "all") {
        state.displayAirlines = state.allAirlines;
        state.activeAirline = "all";
      }

      if (action.payload !== "all") {
        state.displayAirlines = state.allAirlines.filter(
          (airline) => airline.alliance === action.payload
        );
        state.activeAirline = action.payload;
      }
    },
  },
});

export default airlineSlice.reducer;
export const { getAllAirlines, airlineSortByDisplay } = airlineSlice.actions;
