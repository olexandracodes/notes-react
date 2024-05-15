import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import NoteForm from "../components/NoteForm";
import { Grid, Typography, IconButton } from "@mui/material";
import { FormPageContainer } from "../styles/formPageStyles";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { clearForm, setForm } from "../redux/slices/formSlice";
import { RootState } from "../redux/rootReducer";
import { updateNote, addNote } from "../redux/slices/notesSlice";
import { AppDispatch } from "../redux/store";

const FormPage: React.FC = () => {
	const { id } = useParams<{ id?: string }>();
	const navigate = useNavigate();
	const dispatch: AppDispatch = useDispatch();
	const notes = useSelector((state: RootState) => state.notes);
	const note = notes.find((note: { id: number }) => note.id === parseInt(id!));

	useEffect(() => {
		if (note) {
			dispatch(setForm({ title: note.title, content: note.content }));
		} else {
			dispatch(clearForm());
		}
	}, [dispatch, id, note]);

	const handleSubmit = async (values: { title: string; content: string }) => {
		try {
			if (id) {
				await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
					...values,
					id: parseInt(id),
				});
				dispatch(
					updateNote({
						id: parseInt(id),
						updates: values,
					})
				);
			} else {
				const response = await axios.post(
					`https://jsonplaceholder.typicode.com/posts`,
					values
				);
				dispatch(
					addNote({
						id: response.data.id,
						title: response.data.title,
						content: response.data.body,
					})
				);
			}
			handleCancel();
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
				<IconButton aria-label="Close" onClick={handleCancel}>
					<CloseIcon />
				</IconButton>
			</Grid>

			<NoteForm onSubmit={handleSubmit} id={id} />
		</FormPageContainer>
	);
};

export default FormPage;
