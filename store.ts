import create from "zustand";
import { CartItemTypes } from "./features/cart/components/cart-item/types/cart-item";
import { ProductTypes } from "./features/product/types/product";

interface Filter {
  price: string[];
  [key: string]: string[];
}

interface FilterState {
  filters: Filter;
  sortBy: string;
  search: string;
  cart: CartItemTypes[];
  cartTotal: number;
  changeFilters: (name: string, value: string) => void;
  removeFilters: (name: string, value: string) => void;
  changeSortBy: (value: string) => void;
  changeSearch: (value: string) => void;
  addToCart: (value: CartItemTypes) => void;
  rewmoveFromCart: (value: CartItemTypes) => void;
  increaseQty: (value: CartItemTypes) => void;
  decreaseQty: (value: CartItemTypes) => void;
  updateCartTotal: () => void;
}

export const useStore = create<FilterState>((set) => ({
  // initial state
  filters: {
    price: [],
    brands: [],
  },
  sortBy: "low-to-high",
  search: "",
  cartTotal: 0,
  cart: [
    {
      DetailimageURL:
        "https://ecommercekris.blob.core.windows.net/ecomm/cdn_beringtime_com-18640-402_600x600 (1) (1).jpg",
      category: "bering",
      createdAt: "2022-12-27T15:19:15.342Z",
      description:
        "Ultra-light and ultra-elegant. The Titanium Collection by BERING for men.",
      id: 16,
      imageURL:
        "https://cdn.beringtime.com/media/image/61/15/4e/18640-402_600x600.jpg?webp=1",
      price: 99,
      rating: 5,
      title: "Titanium | brushed silver | 18640-402",
      updatedAt: "2022-12-27T15:19:15.342Z",
      qty: 1,
    },
    {
      DetailimageURL:
        "https://ecommercekris.blob.core.windows.net/ecomm/cdn_beringtime_com-18640-402_600x600 (1) (1).jpg",
      category: "bering",
      createdAt: "2022-12-27T15:19:15.342Z",
      description:
        "Ultra-light and ultra-elegant. The Titanium Collection by BERING for men.",
      id: 16,
      imageURL:
        "https://cdn.beringtime.com/media/image/61/15/4e/18640-402_600x600.jpg?webp=1",
      price: 99,
      rating: 5,
      title: "Titanium | brushed silver | 18640-402",
      updatedAt: "2022-12-27T15:19:15.342Z",
      qty: 1,
    },
  ],
  // methods for manipulating state
  changeFilters: (name: string, value: any) => {
    set((state) => ({
      filters: {
        ...state.filters,
        [name.toLowerCase()]: [...state.filters[name.toLowerCase()], value],
      },
    }));
  },
  removeFilters: (name: string, value: any) => {
    set((state) => ({
      filters: {
        ...state.filters,
        [name.toLowerCase()]: state.filters[name.toLowerCase()].filter(
          (item) => item !== value
        ),
      },
    }));
  },

  addToCart: (item: CartItemTypes) => {
    set((state) => ({
      cart: [...state.cart, item],
    }));
  },

  updateCartTotal: () => {
    set((state) => ({
      cartTotal: state.cart.reduce((sum: number, cartItem: CartItemTypes) => {
        sum += cartItem.qty * cartItem.price;
        return sum;
      }, 0),
    }));
  },

  increaseQty: (item: CartItemTypes) => {
    set((state) => ({
      cart: state.cart.map((cartItem: CartItemTypes) => {
        return updateQuantity(cartItem, item, +1);
      }),
    }));
  },
  decreaseQty: (item: CartItemTypes) => {
    set((state) => ({
      cart: state.cart.map((cartItem: CartItemTypes) => {
        return updateQuantity(cartItem, item, -1);
      }),
    }));
  },

  rewmoveFromCart: (item: CartItemTypes) => {
    set((state) => ({
      cart: state.cart.filter((cartItem) => cartItem.title !== item.title),
    }));
  },

  changeSortBy: (value: string) => {
    set((state) => ({
      sortBy: value,
    }));
  },

  changeSearch: (value: string) => {
    set((state) => ({
      search: value,
    }));
  },
}));

const updateQuantity = (
  current: CartItemTypes,
  target: CartItemTypes,
  quantity: number
): CartItemTypes => {
  if (current.id === target.id) {
    return Object.assign({
      ...current,
      qty: current.qty + quantity,
    });
  } else {
    return current;
  }
};

//  const increaseQty = (product: CartItemTypes) => {
//    return updateQuantity(cartItem, cartItem, +1);
//  };

//  const decreaseQty = (product: CartItemTypes) => {
//    return updateQuantity(cartItem, cartItem, -1);
//  };
