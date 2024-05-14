import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import NoteForm from "../components/NoteForm";
import { Grid, Typography, IconButton } from "@mui/material";
import { FormPageContainer } from "../styles/formPageStyles";
import CloseIcon from "@mui/icons-material/Close";

interface Note {
  id?: number;
  title: string;
  content: string;
}

const FormPage: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();
  const [initialValues, setInitialValues] = useState<Note>({
    title: "",
    content: "",
  });

  useEffect(() => {
    const fetchNote = async () => {
      if (id) {
        try {
          const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
          setInitialValues(response.data);
        } catch (error) {
          console.error("Error fetching note", error);
        }
      }
    };

    fetchNote();
  }, [id]);

  const handleSubmit = async (values: Note) => {
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
      <Grid justifyContent="space-between">
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

      <NoteForm initialValues={initialValues} onSubmit={handleSubmit} />
    </FormPageContainer>
  );
};

export default FormPage;
