import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import Split from "react-split";
import Editor from "./components/Editor";
import Sidebar from "./components/Sidebar";

export default function App() {
  const [notes, setNotes] = useState(
    () => JSON.parse(localStorage.getItem("notes")) || []
  );
  const [activeNote, setActiveNote] = useState(notes[0]);

  const getNoteById = (noteId) => notes.find((note) => note.id === noteId);

  const createNote = () => {
    const newNote = {
      id: nanoid(),
      body: "# Type your markdown here...",
    };
    setActiveNote(newNote);
  };

  const updateNote = (newText) => {
    setActiveNote((prevState) => ({ ...prevState, body: newText }));
  };

  const deleteNote = (noteId) => {
    if (noteId === activeNote.id) {
      const activeNoteIndex = notes.indexOf(getNoteById(activeNote.id));
      setActiveNote(notes[activeNoteIndex + 1]);
    }
    setNotes((prevState) => [
      ...prevState.filter((note) => note.id !== noteId),
    ]);
  };

  useEffect(() => {
    if (activeNote) {
      const isActiveNoteBodyEdited =
        activeNote.body !== getNoteById(activeNote.id)?.body;
      if (isActiveNoteBodyEdited)
        setNotes((prevState) => [
          activeNote,
          ...prevState.filter((note) => note.id !== activeNote.id),
        ]);
    }
  }, [activeNote]);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <main className="bg-white w-[90%] mx-auto">
      {notes.length > 0 ? (
        <Split
          sizes={[30, 70]}
          gutterSize={14}
          className="flex rounded-md shadow-md"
        >
          <Sidebar
            notes={notes}
            activeNoteId={activeNote.id}
            createNote={createNote}
            setActiveNote={setActiveNote}
            deleteNote={deleteNote}
          />
          <Editor
            activeNote={activeNote}
            setActiveNote={setActiveNote}
            updateNote={updateNote}
          />
        </Split>
      ) : (
        <div className="flex flex-col items-center justify-center h-screen">
          <h2 className="mb-3 text-3xl font-bold">You have no notes</h2>
          <button
            className="p-4 text-white rounded bg-primary-dark"
            onClick={createNote}
          >
            Create one now
          </button>
        </div>
      )}
    </main>
  );
}
