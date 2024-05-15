import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  Tooltip,
  Pagination,
  IconButton,
} from "@mui/material";
import axios from "axios";
import {
  StyledContainer,
  listItemStyles,
  listItemTextSecondaryStyles,
  paginationContainerStyles,
} from "../styles/homePageStyles";
import { deleteNote, fetchNotes } from "../redux/slices/notesSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { Note } from "../redux/types";

const HomePage: React.FC = () => {
  const dispatch = useAppDispatch();
  const notes = useAppSelector((state) => state.notes) as Note[];
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const itemsPerPage = 10;

  useEffect(() => {
    dispatch(fetchNotes());
  }, [dispatch]);

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const handleDeleteNote = async (id: number) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
      dispatch(deleteNote(id));
    } catch (error) {
      console.error(`Error deleting note with id ${id}`, error);
    }
  };

  const handleNoteClick = (note: Note) => {
    navigate(`/form/${note.id}`);
  };

  const displayNotes = notes.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <>
      <StyledContainer>
        <Typography variant="h4" gutterBottom>Notes</Typography>
        <List>
          {displayNotes.map((note) => (
            <Tooltip title={note.content} arrow placement="right" key={note.id}>
              <ListItem button onClick={() => handleNoteClick(note)} sx={listItemStyles}>
                <ListItemText
                  primary={note.title}
                  secondary={note.content}
                  secondaryTypographyProps={{ sx: listItemTextSecondaryStyles }}
                />
                <IconButton aria-label="Delete" onClick={(e) => {
                  e.stopPropagation(); 
                  handleDeleteNote(note.id);
                }}>
                  Delete
                </IconButton>
              </ListItem>
            </Tooltip>
          ))}
        </List>
      </StyledContainer>
      <Box sx={paginationContainerStyles}>
        <Pagination
          count={Math.ceil(notes.length / itemsPerPage)}
          page={page}
          onChange={handlePageChange}
          color="primary"
        />
      </Box>
      <Link to="/form">Add Note</Link>
    </>
  );
};

export default HomePage;
