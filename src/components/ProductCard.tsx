import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { addProductToCart, removeProductFromCart } from "../redux/actions";

interface ProductCardProps {
  product : Product
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const cart = useSelector((state:AppState) => state.cart);
  const dispatch:Dispatch = useDispatch();

  const handleAdd = () => dispatch(addProductToCart(product));
  const handleRemove = () => dispatch(removeProductFromCart(product));

  const productAlreadyAdded = cart.find(
    (cartProduct) => cartProduct.id === product.id
  );

  return (
    <div className="flex flex-col overflow-hidden rounded shadow-md w-80 bg-slate-50">
      <div className="relative">
        <h5 className="absolute px-3 py-1 text-lg font-medium text-white bg-green-600">
          ${product.price}
        </h5>
        <img
          src={product.image}
          alt={product.title}
          className="object-cover object-top w-full h-52"
        />
        <p className="absolute bottom-0 right-0 px-2 py-1 text-sm text-right text-white bg-sky-800">
          Rating: {product.rating.rate} ({product.rating.count}){" "}
          {product.category}
        </p>
      </div>

      <div className="flex flex-col flex-grow px-3 pt-2 pb-4">
        <h4 className="overflow-hidden font-mono text-lg font-semibold">
          {product.title}
        </h4>
        <p className="h-12 mb-5 overflow-hidden mt-[2px]">
          {product.description}
        </p>
        {!productAlreadyAdded ? (
          <button
            className="block w-full mt-auto font-medium text-white rounded-md bg-sky-600 py-[10px]"
            onClick={handleAdd}
          >
            Add to cart
          </button>
        ) : (
          <button
            className="block w-full mt-auto font-medium text-white rounded-md bg-sky-600 py-[10px]"
            onClick={handleRemove}
          >
            Remove from cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
