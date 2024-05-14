import React, { useEffect, useState } from "react";
import { Formik, Form, Field, FormikProps } from "formik";
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

const NoteForm: React.FC<NoteFormProps> = ({ initialValues, onSubmit }) => {
	const [title, setTitle] = useState(initialValues.title);
	const [content, setContent] = useState(initialValues.content);

	useEffect(() => {
		setTitle(initialValues.title);
		setContent(initialValues.content);
	}, [initialValues]);

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={NoteSchema}
			onSubmit={onSubmit}
		>
			{({ errors, touched, setFieldValue }: FormikProps<{ title: string; content: string }>) => {
				const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
					const newTitle = e.target.value;
					setTitle(newTitle);
					setFieldValue("title", newTitle);
				};

				const handleContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
					const newContent = e.target.value;
					setContent(newContent);
					setFieldValue("content", newContent);
				};

				return (
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
								value={title}
								onChange={handleTitleChange}
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
								value={content}
								onChange={handleContentChange}
							/>
						</div>
						<ButtonBox>
							<FormButton type="submit">Submit</FormButton>
						</ButtonBox>
					</Form>
				);
			}}
		</Formik>
	);
};

export default NoteForm;
