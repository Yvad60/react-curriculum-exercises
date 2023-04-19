import NavBar from "./components/NavBar";
import ProductCard from "./components/ProductCard";
import { useGetProductsQuery } from "./features/api/apislice";

function App() {
  const { isLoading, data } = useGetProductsQuery();

  return (
    <main className="flex justify-center bg-[#fff7ef] min-h-screen">
      <div className="flex flex-col w-full">
        <NavBar />
        {isLoading ? (
          <p className="m-auto text-3xl font-semibold">Fetching products...</p>
        ) : (
          <div className="flex flex-wrap justify-center w-5/6 gap-10 mx-auto mt-10 ">
            {data.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

export default App;
