import { useSelector } from "react-redux";
import NavBar from "./components/NavBar";
import ProductCard from "./components/ProductCard";

function App() {
  const products = useSelector((state) => state.products);

  return (
    <main className="flex justify-center bg-[#fff7ef] min-h-screen">
      <div>
        <NavBar />
        <div className="flex flex-wrap justify-center w-5/6 gap-10 mx-auto mt-10 ">
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;
