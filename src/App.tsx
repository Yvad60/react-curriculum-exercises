import { FC } from "react";
import { connect } from "react-redux";
import NavBar from "./components/NavBar";
import ProductCard from "./components/ProductCard";

interface AppProps {
  products: Product[];
}

const App: FC<AppProps> = ({ products }) => {
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
};

const mapState = (state: AppState) => ({ products: state.products });

export default connect(mapState)(App);
