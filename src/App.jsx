import Main from "./components/Main";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Main />
    </div>
  );
}
