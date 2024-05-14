import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const NoteSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  content: Yup.string().required('Content is required'),
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
        <div>
          <label htmlFor="title">Title</label>
          <Field name="title" id="title" />
          {errors.title && touched.title ? <div>{errors.title}</div> : null}
        </div>
        <div>
          <label htmlFor="content">Content</label>
          <Field name="content" id="content" as="textarea" />
          {errors.content && touched.content ? <div>{errors.content}</div> : null}
        </div>
        <button type="submit">Submit</button>
      </Form>
    )}
  </Formik>
);

export default NoteForm;
