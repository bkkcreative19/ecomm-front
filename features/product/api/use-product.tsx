import { useQuery } from "@tanstack/react-query";
import axios from "axios";

async function getProduct(title: any) {
  const { data } = await axios.get(`http://localhost:5000/products/${title}`);
  return data;
}

export function useProduct(title: any) {
  //   return useQuery(["product"], (title) => getProduct(title), {
  //     staleTime: 60000,
  //   });
  return useQuery({
    queryKey: ["product", title],
    queryFn: () => getProduct(title),
  });
}
