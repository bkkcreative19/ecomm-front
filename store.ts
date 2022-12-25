import create from "zustand";

interface Filter {
  category: string;
  sortBy: string;
}

interface FilterState {
  filters: Filter;
  changeFilters: (name: string, value: string) => void;
}

export const useStore = create<FilterState>((set) => ({
  // initial state
  filters: {
    category: "",
    sortBy: "",
  },
  // methods for manipulating state
  changeFilters: (name: string, value: string) => {
    set((state) => ({
      filters: {
        ...state.filters,
        [name]: value,
      },
    }));
  },
}));
