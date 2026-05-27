import axios from "axios";

const API_BASE = process.env.REACT_APP_API_URL || "/";

export const fetchNotes = async () => {
  const response = await axios.get(`${API_BASE}notes`);
  return response.data;
};

export const createNote = async (note) => {
  const response = await axios.post(`${API_BASE}notes`, note);
  return response.data;
};

export const updateNote = async (id, updatedNote) => {
  const response = await axios.put(`${API_BASE}notes/${id}`, updatedNote);
  return response.data;
};

export const deleteNote = async (id) => {
  await axios.delete(`${API_BASE}notes/${id}`);
};
