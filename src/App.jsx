import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import Split from "react-split";
import Editor from "./components/Editor";
import Sidebar from "./components/Sidebar";

export default function App() {
  const [notes, setNotes] = useState(() => localStorage.getItem("notes") || []);
  const [activeNote, setActiveNote] = useState(null);

  useEffect(() => {
    if (activeNote)
      setNotes((prevState) => [
        activeNote,
        ...prevState.filter((note) => note.id !== activeNote.id),
      ]);
  }, [activeNote]);

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

  return (
    <main className="bg-white">
      <div className="max-w-7xl mx-auto">
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
            />
            <Editor
              activeNote={activeNote}
              setActiveNote={setActiveNote}
              updateNote={updateNote}
            />
          </Split>
        ) : (
          <div className="flex flex-col items-center justify-center h-screen">
            <h2 className="mb-3 font-bold text-[2rem]">You have no notes</h2>
            <button
              className="rounded p-4 bg-[#4A4E74] text-white"
              onClick={createNote}
            >
              Create one now
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
