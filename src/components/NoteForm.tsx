import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField, Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/rootReducer";
import { setForm } from "../redux/slices/formSlice";
import { ResetButton, SubmitButton } from "../styles/formPageStyles";

const NoteSchema = Yup.object().shape({
	title: Yup.string().required("Title is required"),
	content: Yup.string().required("Content is required"),
});

interface NoteFormProps {
	onSubmit: (values: { title: string; content: string }) => void;
	id?: string;
}

const NoteForm: React.FC<NoteFormProps> = ({ onSubmit, id }) => {
	const dispatch = useDispatch();
	const formValues = useSelector((state: RootState) => state.form);
	const note = useSelector((state: RootState) =>
		state.notes.find((note) => note.id === parseInt(id || ""))
	);

	const initialValues = note
		? { title: note.title, content: note.content }
		: formValues;

	const formik = useFormik({
		initialValues,
		validationSchema: NoteSchema,
		onSubmit: (values) => {
			onSubmit(values);
			dispatch(setForm(values));
		},
	});

	useEffect(() => {
		return () => {
			dispatch(setForm(formik.values));
		};
	}, [dispatch, formik.values]);

	const handleReset = () => {
		formik.resetForm();
	};

	return (
		<form onSubmit={formik.handleSubmit}>
			<Box sx={{ marginBottom: "16px" }}>
				<TextField
					name="title"
					label="Title"
					fullWidth
					variant="outlined"
					value={formik.values.title}
					onChange={formik.handleChange}
					error={formik.touched.title && Boolean(formik.errors.title)}
					helperText={formik.touched.title && formik.errors.title}
				/>
			</Box>
			<Box sx={{ marginBottom: "16px" }}>
				<TextField
					name="content"
					label="Content"
					fullWidth
					multiline
					rows={4}
					variant="outlined"
					value={formik.values.content}
					onChange={formik.handleChange}
					error={formik.touched.content && Boolean(formik.errors.content)}
					helperText={formik.touched.content && formik.errors.content}
				/>
			</Box>
			<Box sx={{ display: "flex", justifyContent: "space-between" }}>
				<SubmitButton variant="contained" type="submit">
					Submit
				</SubmitButton>
				<ResetButton variant="outlined" onClick={handleReset}>
					Reset
				</ResetButton>
			</Box>
		</form>
	);
};

export default NoteForm;
