import { useState } from "react";
import { connect } from "react-redux";
import { removeProductFromCart } from "../redux/actions";

const NavBar = ({ cart, dispatch }) => {
  const [isMiniCartVisible, setIsMiniCartVisible] = useState(false);

  const toggleMiniCart = () => setIsMiniCartVisible(!isMiniCartVisible);

  const removeProduct = (product) => dispatch(removeProductFromCart(product));

  return (
    <>
      <header className="sticky top-0 z-50 flex px-20 py-4 bg-white shadow w-full">
        <h1 className="inline-block ml-auto text-3xl font-semibold text-center">
          Shop-it Products
        </h1>
        <div
          className="relative ml-auto text-red-500 rounded-full cursor-pointer"
          onClick={toggleMiniCart}
        >
          <h5 className="absolute right-0 -mt-1 -mr-3 font-medium text-white bg-red-500 rounded-full px-[7px]">
            {cart?.length}
          </h5>
          <i className="relative z-10 text-4xl bi bi-cart4"></i>
        </div>
      </header>
      
      {isMiniCartVisible && cart.length > 0 && (
        <div className="bg-white fixed top-[68px] right-8 z-[100] w-64 border shadow-md p-2 flex flex-col gap-2 divide-y">
          {cart.map((product) => (
            <div key={product.id} className="flex gap-4 items-center">
              <img
                src={product.image}
                alt=""
                className="h-20 w-20 object-cover object-top flex-shrink-0"
              />
              <div className="flex flex-col">
                <h5 className="h-12 overflow-hidden">{product.title}</h5>
                <button
                  className="bg-sky-700 px-2 py-[2px] text-white rounded-sm text-sm ml-auto"
                  onClick={() => removeProduct(product)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

const mapState = (state) => ({ cart: state.cart });

export default connect(mapState)(NavBar);
