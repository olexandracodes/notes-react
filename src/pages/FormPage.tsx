import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import NoteForm from '../components/NoteForm';

interface Note {
  id?: number;
  title: string;
  content: string;
}

const FormPage: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();
  const [initialValues, setInitialValues] = useState<Note>({ title: '', content: '' });

  useEffect(() => {
    const fetchNote = async () => {
      if (id) {
        try {
          const response = await axios.get(`https://yourapi.com/notes/${id}`);
          setInitialValues(response.data);
        } catch (error) {
          console.error('Error fetching note', error);
        }
      }
    };

    fetchNote();
  }, [id]);

  const handleSubmit = async (values: Note) => {
    try {
      if (id) {
        await axios.put(`https://yourapi.com/notes/${id}`, values);
      } else {
        await axios.post('https://yourapi.com/notes', values);
      }
      navigate('/');
    } catch (error) {
      console.error('Error saving note', error);
    }
  };

  return (
    <div>
      <h1>{id ? 'Edit Note' : 'Add Note'}</h1>
      <NoteForm initialValues={initialValues} onSubmit={handleSubmit} />
    </div>
  );
};

export default FormPage;
