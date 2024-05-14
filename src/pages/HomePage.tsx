import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const HomePage: React.FC = () => {
  const [notes, setNotes] = useState<{ id: number; title: string; content: string }[]>([]);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await axios.get('https://yourapi.com/notes');
        setNotes(response.data);
      } catch (error) {
        console.error('Error fetching notes', error);
      }
    };

    fetchNotes();
  }, []);

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <Link to={`/form/${note.id}`}>{note.title}</Link>
          </li>
        ))}
      </ul>
      <Link to="/form">Add New Note</Link>
    </div>
  );
};

export default HomePage;
