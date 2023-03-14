import { useState } from "react";

export default function Sidebar({
  notes,
  activeNoteId,
  createNote,
  setActiveNote,
}) {
  const [selectedNoteIndex, setSelectedNoteIndex] = useState(0);
  return (
    <aside>
      <div className="flex justify-around items-center py-2 bg-white">
        <h4 className="text-2xl font-bold">Notes</h4>
        <button
          className="rounded px-3 py-1 bg-[#4A4E74] text-white hover:bg-[#2f314a]"
          onClick={createNote}
        >
          +
        </button>
      </div>
      <div className="flex flex-col font-medium">
        {notes.map((note, index) => {
          return (
            <nav
              onClick={() => {
                setSelectedNoteIndex(note.id);
              }}
              key={note.id}
              className={`p-4 border-[0.5px] border-[#f0f0f0] ${
                selectedNoteIndex === index
                  ? "bg-primary-dark text-primary-light"
                  : "hover:bg-[#f7f7f7]"
              }`}
            >
              {note.body}
            </nav>
          );
        })}
      </div>
    </aside>
  );
}
