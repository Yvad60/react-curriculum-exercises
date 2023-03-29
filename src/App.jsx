import About from "./components/About";
import Footer from "./components/Footer";
import Info from "./components/Info";
import Interest from "./components/Interest";

export default function App() {
  return (
    <main className="bg-[#23252C] flex justify-center items-center min-h-screen py-12">
      <div className="bg-[#1A1B21] max-w-[317px]">
        <Info />
        <About />
        <Interest />
        <Footer />
      </div>
    </main>
  );
}
