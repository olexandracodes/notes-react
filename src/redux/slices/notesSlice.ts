import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Note } from "../types";
import { AppDispatch } from "../store";

export const fetchNotes = createAsyncThunk<Note[], void, { dispatch: AppDispatch }>(
    'notes/fetchNotes',
    async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            return response.data.map((note: any) => ({
                id: note.id,
                title: note.title,
                content: note.body,
            })) as Note[];
        } catch (error) {
            console.error('Error fetching notes:', error);
            throw error;
        }
    }
);

export const updateNote = createAsyncThunk<Note, { id: number, updates: Partial<Note> }, { dispatch: AppDispatch }>(
    'notes/updateNote',
    async ({ id, updates }) => {
        try {
            const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, updates);
            return {
                id: response.data.id,
                title: response.data.title,
                content: response.data.body,
            } as Note;
        } catch (error) {
            console.error(`Error updating note with id ${id}:`, error);
            throw error;
        }
    }
);

export const addNote = createAsyncThunk<Note, Partial<Note>, { dispatch: AppDispatch }>(
    'notes/addNote',
    async (noteData) => {
        try {
            const response = await axios.post('https://jsonplaceholder.typicode.com/posts', noteData);
            return {
                id: response.data.id,
                title: response.data.title,
                content: response.data.body,
            } as Note;
        } catch (error) {
            console.error('Error adding note:', error);
            throw error;
        }
    }
);

const notesSlice = createSlice({
    name: "notes",
    initialState: [] as Note[],
    reducers: {
        deleteNote: (state, action: PayloadAction<number>) => {
            return state.filter((note) => note.id !== action.payload);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(
            fetchNotes.fulfilled,
            (state, action: PayloadAction<Note[]>) => {
                state.length = 0;
                state.push(...action.payload);
            }
        );
        builder.addCase(
            updateNote.fulfilled,
            (state, action: PayloadAction<Note>) => {
                const index = state.findIndex(note => note.id === action.payload.id);
                if (index !== -1) {
                    state[index] = action.payload;
                }
            }
        );
        builder.addCase(
            addNote.fulfilled,
            (state, action: PayloadAction<Note>) => {
                state.unshift(action.payload);
            }
        );
    },
});

export const { deleteNote } = notesSlice.actions;
export default notesSlice.reducer;
