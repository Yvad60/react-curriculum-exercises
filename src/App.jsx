import Navbar from "./components/Navbar";
import Experiences from "./components/sections/Experiences";
import Hero from "./components/sections/Hero";

export default function App() {
  return (
    <div className="mb-8">
      <Navbar />
      <Hero />
      <Experiences />
    </div>
  );
}
