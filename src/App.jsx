import { useEffect } from "react";
import { connect } from "react-redux";
import NavBar from "./components/NavBar";
import ProductCard from "./components/ProductCard";
import { fetchProductThunk } from "./redux/actions";

function App({ products, loading, dispatch }) {
  useEffect(() => {
    dispatch(fetchProductThunk());
  }, []);

  return (
    <main className="flex justify-center bg-[#fff7ef] min-h-screen">
      <div className="w-full flex flex-col">
        <NavBar />
        {loading ? (
          <p className="text-2xl text-center my-auto font-medium">
            Loading products...
          </p>
        ) : (
          <div className="flex flex-wrap justify-center w-5/6 gap-10 mx-auto mt-10 ">
            {products &&
              products.map((product) => (
                <ProductCard product={product} key={product.id} />
              ))}
          </div>
        )}
      </div>
    </main>
  );
}

const mapState = (state) => ({
  products: state.products,
  loading: state.loading,
  error: state.error,
});

export default connect(mapState)(App);
