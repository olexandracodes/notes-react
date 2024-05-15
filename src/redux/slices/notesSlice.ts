import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { Note } from '../types';

export const fetchNotes = createAsyncThunk('notes/fetchNotes', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return response.data.map((note: any) => ({
    id: note.id,
    title: note.title,
    content: note.body,
  })) as Note[];
});

const notesSlice = createSlice({
  name: 'notes',
  initialState: [] as Note[],
  reducers: {
    deleteNote: (state, action: PayloadAction<number>) => {
      return state.filter(note => note.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchNotes.fulfilled, (state, action: PayloadAction<Note[]>) => {
      return action.payload;
    });
  },
});

export const { deleteNote } = notesSlice.actions;
export default notesSlice.reducer;
