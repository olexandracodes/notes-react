import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import NoteForm from "../components/NoteForm";
import { Grid, Typography, IconButton } from "@mui/material";
import { FormPageContainer } from "../styles/formPageStyles";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { clearForm, setForm } from "../redux/slices/formSlice";

const FormPage: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchNote = async () => {
      if (id) {
        try {
          const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
          dispatch(setForm({ title: response.data.title, content: response.data.body }));
        } catch (error) {
          console.error("Error fetching note", error);
        }
      } else {
        dispatch(clearForm());
      }
    };

    fetchNote();
  }, [id, dispatch]);

  const handleSubmit = async (values: { title: string; content: string }) => {
    try {
      if (id) {
        await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, values);
      } else {
        await axios.post("https://jsonplaceholder.typicode.com/posts", values);
      }
      navigate("/");
    } catch (error) {
      console.error("Error saving note", error);
    }
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <FormPageContainer>
      <Grid container justifyContent="space-between">
        <Typography variant="h4" gutterBottom>
          {id ? "Edit Note" : "Add Note"}
        </Typography>
        <IconButton
          aria-label="Close"
          onClick={handleCancel}
          style={{ position: "absolute", top: 10, right: 10 }}
        >
          <CloseIcon />
        </IconButton>
      </Grid>

      <NoteForm onSubmit={handleSubmit} />
    </FormPageContainer>
  );
};

export default FormPage;
