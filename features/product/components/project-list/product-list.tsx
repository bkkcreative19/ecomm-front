import { useProducts } from "../../api/use-products";
import { Product } from "../product";
import { ProductTypes } from "../../types/product";
import styled from "styled-components";
import { BsFillGridFill, BsListCheck } from "react-icons/bs";
import { FiChevronDown } from "react-icons/fi";
import { useState } from "react";

type Props = {
  view: string;
};

const ProductListStyles = styled.div<Props>`
  display: grid;
  grid-template-columns: ${(p) =>
    p.view === "grid" ? "repeat(auto-fill, minmax(240px, 1fr))" : "1fr"};
  gap: 2.5rem;
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
    margin: 0 15px;
  }
`;
const SelectContainer = styled.div`
  padding: 11px 20px;
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

export function ProductList() {
  const { data: products, isLoading } = useProducts();
  const [view, setView] = useState("grid");
  return (
    <Container>
      <ToolBar>
        <Results>Showing all {products?.length} results</Results>
        <Views>
          Views:
          <Icon onClick={() => setView("grid")}>
            <BsFillGridFill />
          </Icon>
          <Icon>
            <BsListCheck onClick={() => setView("list")} />
          </Icon>
        </Views>
        <SelectContainer>
          Popularity <FiChevronDown />
        </SelectContainer>
      </ToolBar>
      <ProductListStyles view={view}>
        {products?.map((product: ProductTypes) => {
          return <Product view={view} key={product.id} product={product} />;
        })}
      </ProductListStyles>
    </Container>
  );
}
