const App: React.FC = () => {
  const displayMessage = (): void => alert("Clicked!");

  return (
    <main className="bg-[#ececec] h-screen flex justify-center items-center">
      <button
        onClick={displayMessage}
        className="px-8 py-2 text-lg font-medium text-white bg-blue-800 rounded hover:bg-blue-900"
      >
        Click me
      </button>
    </main>
  );
};

export default App;
