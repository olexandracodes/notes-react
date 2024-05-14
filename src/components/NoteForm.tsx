import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { TextField } from "@mui/material";
import { ButtonBox, FormButton } from "../styles/formPageStyles";

const NoteSchema = Yup.object().shape({
	title: Yup.string().required("Title is required"),
	content: Yup.string().required("Content is required"),
});

interface NoteFormProps {
	initialValues: { title: string; content: string };
	onSubmit: (values: { title: string; content: string }) => void;
}

const NoteForm: React.FC<NoteFormProps> = ({ initialValues, onSubmit }) => (
	<Formik
		initialValues={initialValues}
		validationSchema={NoteSchema}
		onSubmit={onSubmit}
	>
		{({ errors, touched }) => (
			<Form>
				<div style={{ marginBottom: "16px" }}>
					<Field
						name="title"
						id="title"
						as={TextField}
						label="Title"
						fullWidth
						variant="outlined"
						error={!!errors.title && touched.title}
						helperText={errors.title && touched.title ? errors.title : ""}
					/>
				</div>
				<div style={{ marginBottom: "16px" }}>
					<Field
						name="content"
						id="content"
						as={TextField}
						label="Content"
						fullWidth
						multiline
						rows={4}
						variant="outlined"
						error={!!errors.content && touched.content}
						helperText={errors.content && touched.content ? errors.content : ""}
					/>
				</div>
				<ButtonBox>
					<FormButton type="submit">Submit</FormButton>
				</ButtonBox>
			</Form>
		)}
	</Formik>
);

export default NoteForm;
