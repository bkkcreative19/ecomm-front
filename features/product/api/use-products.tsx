import { useQuery } from "@tanstack/react-query";
import axios from "axios";

async function getProducts() {
  const { data } = await axios.get("http://localhost:5000/products");
  return data;
}

export function useProducts() {
  return useQuery(["products"], getProducts, {
    staleTime: 60000,
  });
}
