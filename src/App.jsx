import { TodoRow } from "./components/TodoRow";

const App = () => {
  return (
    <main className="flex justify-center min-h-screen py-10 bg-slate-100">
      <div className="w-full max-w-[800px]">
        <h1 className="font-bold text-center text-gray-300 select-none text-[116px] font-Alkatra">
          Todo
        </h1>
        <div className="flex w-full px-5 py-3 text-lg bg-white border border-gray-300 shadow-md outline-none rounded-3xl">
          <input type="text" className="w-full outline-none " />
          <button className="bg-[#018d81] h-8 w-[34px] text-white text-3xl flex justify-center items-center rounded-full">
            +
          </button>
        </div>
        <div className="mt-6">
          <TodoRow />
          <TodoRow />
        </div>
      </div>
    </main>
  );
};

export default App;
