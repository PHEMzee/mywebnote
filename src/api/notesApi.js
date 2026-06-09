import axios from "axios";

const API_BASE = process.env.REACT_APP_API_URL || "/";
const BROWSER_ID_KEY = "mywebnote-browser-id";

const getBrowserId = () => {
  if (typeof window === "undefined") return null;

  let browserId = window.localStorage.getItem(BROWSER_ID_KEY);
  if (!browserId) {
    browserId =
      window.crypto?.randomUUID?.() ||
      `${Date.now()}-${Math.random().toString(36).slice(2)}`;
    window.localStorage.setItem(BROWSER_ID_KEY, browserId);
  }

  return browserId;
};

const getHeaders = () => {
  const browserId = getBrowserId();
  return browserId ? { "x-browser-id": browserId } : {};
};

export const fetchNotes = async () => {
  const response = await axios.get(`${API_BASE}notes`, {
    headers: getHeaders(),
  });
  return response.data;
};

export const createNote = async (note) => {
  const response = await axios.post(`${API_BASE}notes`, note, {
    headers: getHeaders(),
  });
  return response.data;
};

export const updateNote = async (id, updatedNote) => {
  const response = await axios.put(`${API_BASE}notes/${id}`, updatedNote, {
    headers: getHeaders(),
  });
  return response.data;
};

export const deleteNote = async (id) => {
  await axios.delete(`${API_BASE}notes/${id}`, {
    headers: getHeaders(),
  });
};
