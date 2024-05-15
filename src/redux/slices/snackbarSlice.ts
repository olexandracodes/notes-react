import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SnackbarMessage } from "../types";

interface SnackbarState {
    queue: SnackbarMessage[];
}

const initialState: SnackbarState = {
    queue: [],
};

const snackbarSlice = createSlice({
    name: "snackbar",
    initialState,
    reducers: {
        enqueueSnackbar: (state, action: PayloadAction<SnackbarMessage>) => {
            state.queue.push(action.payload);
        },
        dequeueSnackbar: (state) => {
            state.queue.shift();
        },
    },
});

export const { enqueueSnackbar, dequeueSnackbar } = snackbarSlice.actions;

export default snackbarSlice.reducer;
