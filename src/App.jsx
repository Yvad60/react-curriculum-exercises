import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "./components/NavBar";
import ProductCard from "./components/ProductCard";
import { fetchProducts } from "./features/products/productSlice";

function App() {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <main className="flex justify-center bg-[#fff7ef] min-h-screen">
      <div className="flex flex-col w-full">
        <NavBar />
        {loading ? (
          <p className="m-auto text-3xl font-semibold">Fetching products...</p>
        ) : (
          <div className="flex flex-wrap justify-center w-5/6 gap-10 mx-auto mt-10 ">
            {products.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

export default App;
