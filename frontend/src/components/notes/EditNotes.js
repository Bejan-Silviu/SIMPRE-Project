import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function EditNote() {
  const { id } = useParams();
  const [note, setNote] = useState({
    title: '',
    content: '',
    date: '',
    id: '',
  });
  const [error, setError] = useState('');

  const history = useNavigate();

  useEffect(() => {
    const getNote = async () => {
      const token = localStorage.getItem('tokenStore');
      if (id) {
        try {
          const res = await axios.get(`https://my-simpre-project.vercel.app/api/notes/${id}`, {
            headers: { Authorization: token },
          });
          setNote({
            title: res.data.title,
            content: res.data.content,
            date: new Date(res.data.date).toLocaleDateString(),
            id: res.data._id,
          });
        } catch (err) {
          setError(err.message);
        }
      }
    };

    getNote();
  }, [id]);

  const onChangeInput = e => {
    const { name, value } = e.target;
    setNote({ ...note, [name]: value });
  };

  const editNote = async e => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('tokenStore');
      if (token) {
        const { title, content, date, id } = note;
        const newNote = {
          title,
          content,
          date,
        };

        await axios.put(`https://my-simpre-project.vercel.app/api/notes/${id}`, newNote, {
          headers: { Authorization: token },
        });

        history.push('/');
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="create-note">
      <h2>Edit note</h2>

      {error && <div className="error">{error}</div>}

      <form onSubmit={editNote} autoComplete="off">
        <div className="row">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={note.title}
            required
            onChange={onChangeInput}
          />
        </div>

        <div className="row">
          <label htmlFor="content">Content</label>
          <textarea
            cols="30"
            rows="10"
            type="textarea"
            id="content"
            name="content"
            value={note.content}
            required
            onChange={onChangeInput}
          />
        </div>

        <div className="row">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={note.date}
            onChange={onChangeInput}
          />
        </div>

        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default EditNote;
