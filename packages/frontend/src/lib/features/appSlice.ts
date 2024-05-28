import { Slice, createSlice } from "@reduxjs/toolkit";
export interface AppState {
    showHeader: boolean;
}
export const initialAppState: AppState = {
    showHeader: true,
};
export const appSlice: Slice = createSlice({
    name: "app",
    initialState: initialAppState,
    reducers: {
        setShowHeader: (state, action) => {
            state.showHeader = action.payload;
        }
    },
});
export const { setShowHeader } = appSlice.actions;
export default appSlice.reducer;