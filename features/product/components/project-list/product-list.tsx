import { useProducts } from "../../api/use-products";
import { Product } from "../product";
import { ProductTypes } from "../../types/product";
import styled from "styled-components";
import { BsFillGridFill, BsListCheck } from "react-icons/bs";
import { FiChevronDown } from "react-icons/fi";
import { useRouter } from "next/router";
import { useState } from "react";
import { useStore } from "../../../../store";
import Skeleton from "react-loading-skeleton";
import { ClipLoader } from "react-spinners";

type Props = {
  view: string;
};

const ProductListStyles = styled.div<Props>`
  display: grid;
  grid-template-columns: ${(p) =>
    p.view === "grid" ? "repeat(auto-fill, minmax(240px, 1fr))" : "1fr"};
  gap: ${(p) => (p.view === "list" ? "5.5rem" : "2.5rem")};
  width: 100%;
`;

const ToolBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 66px;
  margin-top: 30px;
`;

const Results = styled.p`
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  /* identical to box height, or 171% */

  letter-spacing: 0.2px;

  /* second-text-color */

  color: #737373;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

const Views = styled.div`
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  /* identical to box height, or 171% */
  display: flex;
  align-items: center;
  letter-spacing: 0.2px;

  /* second-text-color */

  color: #737373;
`;

const Icon = styled.div`
  height: 30px;
  width: 30px;
  border: 1px solid #ececec;
  border-radius: 5px;
  display: flex;
  place-items: center;
  justify-content: center;
  cursor: pointer;

  &:first-child {
    margin: 0 6px;
  }
`;
const SelectContainer = styled.div`
  padding: 7px 20px;
  background: #f9f9f9;
  border: 1px solid #dddddd;
  border-radius: 5px;
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 28px;
  /* identical to box height, or 200% */
  display: flex;
  place-items: center;
  letter-spacing: 0.2px;
  gap: 5px;
  /* second-text-color */
  cursor: pointer;
  color: #737373;
`;

const LoadingContainer = styled.div`
  display: flex;
  width: 100%;

  & span {
    margin: 0 auto;
    margin-top: 5rem;
  }
`;

export function ProductList() {
  const router = useRouter();
  const { data: products, isLoading } = useProducts();

  console.log(products);

  const { filters, changeSortBy, sortBy, search } = useStore();
  const filteredProducts = filterProducts(filters.brands, products);
  const yay = filterPrice(filters.price, filteredProducts);

  const sortedProducts = sortProducts(sortBy, yay);
  const searchedProducts = filterSearch(search, sortedProducts);

  const [view, setView] = useState("grid");

  if (isLoading) {
    return (
      <LoadingContainer>
        <ClipLoader
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </LoadingContainer>
    );
  }

  return (
    <Container>
      <ToolBar>
        <Results>Showing all {searchedProducts?.length} results</Results>
        <Views>
          Views:
          <Icon onClick={() => setView("grid")}>
            <BsFillGridFill />
          </Icon>
          <Icon>
            <BsListCheck onClick={() => setView("list")} />
          </Icon>
        </Views>

        <select
          onChange={(e) => changeSortBy(e.target.value)}
          name="sort"
          id=""
          value={sortBy}
        >
          <option value="low-to-high">Price: low to high </option>
          <option value="high-to-low">Price: high to low</option>
          <option value="hi2">hi2</option>
        </select>
      </ToolBar>
      <ProductListStyles view={view}>
        {searchedProducts?.map((product: ProductTypes) => {
          return <Product view={view} key={product.id} product={product} />;
        })}
      </ProductListStyles>
    </Container>
  );
}

const filterProducts = (filter: string[], products: ProductTypes[]) => {
  let newFilters = filter.map((filter) => filter.toLowerCase());

  if (filter.length !== 0) {
    let newProducts = products.filter((item) =>
      newFilters.includes(item.category)
    );
    return newProducts;
  } else {
    return products;
  }
};

const filterPrice = (filter: string[], products: ProductTypes[]) => {
  let test = filter
    .map((item) =>
      item.split("-").map((item) => Number(item.slice(1).replaceAll(",", "")))
    )
    .flat();

  if (filter.length !== 0) {
    let newProducts = products.filter(
      (item) => item.price >= test[0] && item.price <= test[test.length - 1]
    );
    return newProducts;
  } else {
    return products;
  }
};

const sortProducts = (sortBy: string, products: ProductTypes[]) => {
  let sortedArr: ProductTypes[] = [];
  if (products) {
    sortedArr = [...products];
  }

  if (sortBy === "high-to-low") {
    sortedArr.sort((a, b) => b.price - a.price);
  } else if (sortBy === "low-to-high") {
    sortedArr.sort((a, b) => a.price - b.price);
  } else {
    return products;
  }

  return sortedArr;
};

const filterSearch = (search: string, products: ProductTypes[]) => {
  let test;

  if (search) {
    test = products.filter((item) => {
      return search.toLowerCase() === ""
        ? item
        : item.title.toLowerCase().includes(search.toLowerCase());
    });
  } else {
    return products;
  }

  return test;
};
