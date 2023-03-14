import { useState } from "react";

export default function Sidebar({
  notes,
  activeNoteId,
  createNote,
  setActiveNote,
  deleteNote,
}) {
  const [hoveredNoteId, setHoveredNoteId] = useState();

  const createNoteTitle = (noteBody) => {
    return noteBody[0] === "#"
      ? noteBody.split("\n")[0].slice(1)
      : noteBody.split("\n")[0];
  };

  return (
    <aside>
      <div className="flex items-center justify-around py-2 bg-white">
        <h4 className="text-2xl font-bold">Notes</h4>
        <button
          className="rounded px-3 py-1 bg-[#4A4E74] text-white hover:bg-[#2f314a]"
          onClick={createNote}
        >
          +
        </button>
      </div>
      <div className="flex flex-col font-medium">
        {notes.map((note) => {
          return (
            <nav
              onClick={() => {
                setActiveNote(note);
              }}
              onMouseOver={() => {
                setHoveredNoteId(note.id);
              }}
              onMouseLeave={() => {
                setHoveredNoteId(null);
              }}
              key={note.id}
              className={`px-4 min-h-[60px] flex items-center border-[0.5px] border-[#f0f0f0] ${
                activeNoteId === note.id
                  ? "bg-primary-dark text-primary-light"
                  : "hover:bg-[#f7f7f7]"
              }`}
            >
              {createNoteTitle(note.body)}
              {(hoveredNoteId === note.id || activeNoteId === note.id) && (
                <i
                  className="bi bi-trash3 text-xl text-red-500 ml-auto cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteNote(note.id);
                  }}
                ></i>
              )}
            </nav>
          );
        })}
      </div>
    </aside>
  );
}
