import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  Tooltip,
  Pagination,
  IconButton,
} from '@mui/material';
import axios from 'axios';
import { StyledContainer, listItemStyles, listItemTextSecondaryStyles, paginationContainerStyles } from '../styles/homePageStyles';

const HomePage: React.FC = () => {
  const [notes, setNotes] = useState<{ id: number; title: string; content: string }[]>([]);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setNotes(response.data.slice(0, 100).map((note: any) => ({ id: note.id, title: note.title, content: note.body })));
      } catch (error) {
        console.error('Error fetching notes', error);
      }
    };

    fetchNotes();
  }, []);

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const displayNotes = notes.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  const handleDeleteNote = (id: number) => {
    // Implement delete functionality
    console.log(`Delete note with id ${id}`);
  };

  return (
    <>
      <StyledContainer>
        <Typography variant="h4" gutterBottom>Notes</Typography>
        <List>
          {displayNotes.map((note) => (
            <Tooltip title={note.content} arrow placement="right" key={note.id}>
              <ListItem
                component="div"
                onClick={() => navigate(`/form/${note.id}`)}
                sx={listItemStyles}
              >
                <ListItemText
                  primary={note.title}
                  secondary={note.content}
                  secondaryTypographyProps={{ sx: listItemTextSecondaryStyles }}
                />
                <IconButton aria-label="Delete" onClick={() => handleDeleteNote(note.id)}>
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
