import { Dispatch, FC, SetStateAction, createContext, useState } from "react";

interface CartContextProviderProps {
  children: JSX.Element;
}

interface CartContext {
  cart: Product[];
  setCart: Dispatch<SetStateAction<Product[]>>;
}

export const cartContext = createContext<CartContext>({
  cart: [],
  setCart: () => {},
});

const CartContextProvider: FC<CartContextProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<Product[]>([]);

  return <cartContext.Provider value={{ cart, setCart }}>{children}</cartContext.Provider>;
};

export default CartContextProvider;
