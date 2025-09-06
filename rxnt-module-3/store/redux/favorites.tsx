import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
    name: "favorites",
    initialState: { ids: [] as string[] },
    reducers: {
        addFavorite: (state, action) => {
            state.ids.push(action.payload.id);
        },
        removeFavorite: (state, action) => {
            state.ids = state.ids.filter((id) => id !== action.payload.id);
        },
    },
});

export const favoritesActions = favoritesSlice.actions.addFavorite;
export const removeFavoriteActions = favoritesSlice.actions.removeFavorite;
export default favoritesSlice.reducer;
