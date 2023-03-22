import { useState } from "react";

const App = () => {
  const [names, setNames] = useState({ firstName: "", lastName: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNames((prevState) => ({ ...prevState, [name]: value }));
  };

  const greetUser = () => {
    if (names.firstName || names.lastName)
      alert(`Hello ${names.firstName} ${names.lastName}!`);
  };

  return (
    <main className="flex justify-center h-screen items-center bg-[#fefffe]">
      <div className="flex flex-col gap-6">
        <input
          type="text"
          placeholder="First name"
          className="px-4 py-3 border-2 rounded-md min-w-[350px]"
          value={names.firstName}
          onChange={handleChange}
          name="firstName"
        />

        <input
          type="text"
          placeholder="Last name"
          className="px-4 py-3 border-2 rounded-md min-w-[350px]"
          value={names.lastName}
          onChange={handleChange}
          name="lastName"
        />

        <button
          className="uppercase bg-[#f1003d] text-white text-xl font-semibold py-3 rounded-lg shadow-btn-shadow active:shadow-none active:pb-2 active:pt-4"
          onClick={greetUser}
        >
          Greet me
        </button>
      </div>
    </main>
  );
};

export default App;
