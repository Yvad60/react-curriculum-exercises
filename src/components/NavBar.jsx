import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeProductFromCart } from "../redux/actions";

const NavBar = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const [isMiniCartVisible, setIsMiniCartVisible] = useState(false);

  const toggleMiniCart = () => setIsMiniCartVisible(!isMiniCartVisible);
  const removeProduct = (product) => dispatch(removeProductFromCart(product));
  
  return (
    <>
      <header className="sticky top-0 z-50 flex px-20 py-4 bg-white shadow">
        <h1 className="inline-block ml-auto text-3xl font-semibold text-center">
          Shop-it Products
        </h1>
        <div
          className="relative ml-auto text-red-500 rounded-full cursor-pointer"
          onClick={toggleMiniCart}
        >
          <h5 className="absolute right-0 -mt-1 -mr-3 font-medium text-white bg-red-500 rounded-full px-[7px]">
            {cart.length}
          </h5>
          <i className="relative z-10 text-4xl bi bi-cart4"></i>
        </div>
      </header>
      {isMiniCartVisible && cart.length > 0 && (
        <div className="fixed flex flex-col w-64 gap-2 p-2 bg-white border divide-y shadow-md top-[68px] right-8 z-[100]">
          {cart.map((product) => (
            <div key={product.id} className="flex items-center gap-4">
              <img
                src={product.image}
                alt=""
                className="flex-shrink-0 object-cover object-top w-20 h-20"
              />
              <div className="flex flex-col">
                <h5 className="h-12 overflow-hidden">{product.title}</h5>
                <button
                  className="px-2 ml-auto text-sm text-white rounded-sm bg-sky-700 py-[2px]"
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

export default NavBar;
