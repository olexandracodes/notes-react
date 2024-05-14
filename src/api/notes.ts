import axios from 'axios';

const API_URL = 'https://yourapi.com';

export const fetchNotes = async () => {
  const response = await axios.get(`${API_URL}/notes`);
  return response.data;
};

export const createNote = async (note: { title: string; content: string }) => {
  const response = await axios.post(`${API_URL}/notes`, note);
  return response.data;
};
