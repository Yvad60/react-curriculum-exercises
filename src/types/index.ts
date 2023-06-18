type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

interface RemoveProductFromCartAction {
  type: "REMOVE_PRODUCT_FROM_CART";
  payload: {
    product: Product;
  };
}

interface AddPRoductToCartAction {
  type: "ADD_PRODUCT_TO_CART";
  payload: {
    product: Product;
  };
}

type AppAction = RemoveProductFromCartAction | AddPRoductToCartAction;

interface AppState {
  products: Product[];
  cart: Product[];
}
