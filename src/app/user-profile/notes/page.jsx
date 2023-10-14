"use client";
import Layout from "@/app/Layout/page";
import React, { useEffect, useState } from "react";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [state, setState] = useState({
    title: '',
    note: '',
  });

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/notes/${id}`, {
        method: 'DELETE',
      });
      // Remove the deleted note from the state
      setNotes((prevNotes) => prevNotes.filter((note) => note._id !== id));
    } catch (error) {
      console.error(error);
    }
  };
  

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/notes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(state),
      });

      if (response.ok) {
        const newNote = await response.json();
        setNotes([...notes, newNote]);
        setState({
          title: '',
          note: '',
        });
      } else {
        console.error('Failed to create note');
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    async function fetchNotes() {
      try {
        const response = await fetch('http://localhost:5000/api/notes');
        if (response.ok) {
          const data = await response.json();
          setNotes(data);
        } else {
          console.error('Failed to fetch notes');
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchNotes();
  }, []);

  return (
    <Layout>
      <div className="bg-[#222831] p-4 flex flex-col gap-2 rounded-md shadow-md">
        <h1>Notes</h1>
        <div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="title"
              name="title"
              onChange={handleChange}
              value={state.title}
              required
              className="outline-none bg-transparent border-b-2 border-white"
            />
            <textarea
              name="note"
              placeholder="note"
              onChange={handleChange}
              value={state.note}
              required
              className="outline-none bg-transparent border-b-2 border-white"
            ></textarea>
            <div className="flex justify-end">
              <button
                type="submit"
                className="py-2 px-4 bg-white hover:bg-slate-200 font-semibold text-xs text-[#F96D00] rounded-sm"
              >
                Add Note
              </button>
            </div>{" "}
          </form>
        </div>
        <div>
          {/* notes container */}
          {notes.length > 0 ? (
            notes.map((note) => (
              <div key={note._id} className="bg-black bg-opacity-40 p-4">
                <h3 className="">{note.title}</h3>
                <p className="text-base">{note.note}</p>
                <div className="flex justify-end">
                <button onClick={() => handleDelete(note._id)} className="bg-red-500 text-white p-2 text-xs">Delete</button>
                </div>
              </div>
            ))
          ) : (
            <p>No Notes Available</p>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Notes;
