export const TodoRow = () => {
  return (
    <div className="flex items-center w-full gap-5 py-5 border-b border-slate-300">
      <input
        type="checkbox"
        name=""
        className="w-6 h-6 rounded accent-gray-500"
      />
      <p className="w-full text-[17px] line-through">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, voluptate
        eligendi quia voluptatem est ipsum expedita reprehenderit quae ex
        facilis!
      </p>
      <button className="py-[9px] px-3 rounded-full bg-[#fffdfd] shadow">
        <i class="text-xl text-red-600 bi bi-trash3-fill"></i>
      </button>
    </div>
  );
};
