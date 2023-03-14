export default function Sidebar({
  notes,
  activeNoteId,
  createNote,
  setActiveNote,
}) {
  const createNoteTitle = (noteBody) => {
    return noteBody[0] === "#"
      ? noteBody.split("\n")[0].slice(1)
      : noteBody.split("\n")[0];
  };

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
        {notes.map((note) => {
          return (
            <nav
              onClick={() => {
                setActiveNote(note);
              }}
              key={note.id}
              className={`px-4 min-h-[60px] flex items-center border-[0.5px] border-[#f0f0f0] ${
                activeNoteId === note.id
                  ? "bg-primary-dark text-primary-light"
                  : "hover:bg-[#f7f7f7]"
              }`}
            >
              {createNoteTitle(note.body)}
            </nav>
          );
        })}
      </div>
    </aside>
  );
}
