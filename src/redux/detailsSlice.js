import { createSlice } from "@reduxjs/toolkit";

export const detailsSlice = createSlice({
  name: "details",
  initialState: [],
  reducers: {
    addDetail: {
      reducer(state, action) {
        state.push(action.payload);
      },
      //   prepare(detail) {
      //     return {
      //       payload: { ...detail },
      //     };
      //   },
    },
    deleteDetail(state, action) {
      if (action.payload === null) {
        console.log("no id");
      }
      return state.filter((detail) => detail.id !== action.payload);
    },
    clearDetailsState(state, action) {
      return (state = []);
    },
  },
});

export const { addDetail, deleteDetail, clearDetailsState } =
  detailsSlice.actions;
export const detailsReducer = detailsSlice.reducer;

export const detailsData = (state) => state.details;
