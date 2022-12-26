import create from "zustand";

interface Filter {
  price: string[];
  [key: string]: string[];
}

interface FilterState {
  filters: Filter;
  sortBy: string;
  search: string;
  changeFilters: (name: string, value: string) => void;
  removeFilters: (name: string, value: string) => void;
  changeSortBy: (value: string) => void;
  changeSearch: (value: string) => void;
}

export const useStore = create<FilterState>((set) => ({
  // initial state
  filters: {
    price: [],
    brands: [],
  },
  sortBy: "low-to-high",
  search: "",
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
