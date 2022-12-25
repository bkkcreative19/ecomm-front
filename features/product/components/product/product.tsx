import { ProductTypes } from "../../types/product";
import styled from "styled-components";
import { FaStar, FaRegStar } from "react-icons/fa";
import Image from "next/image";

type ProductProps = {
  product: ProductTypes;
  view: string;
};

const ProductStyles = styled.div<Pick<ProductProps, "view">>`
  height: ${(p) => (p.view === "list" ? "215px" : "455px")};
  display: ${(p) => (p.view === "list" ? "flex" : "")};
  gap: 70px;
`;
const Title = styled.h3`
  margin-top: 28px;
  font-weight: 900;
  font-size: 15px;
  line-height: 24px;
  /* identical to box height, or 150% */

  letter-spacing: 0.1px;

  /* text-color */

  color: #252b42;
`;

const Pricing = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 5px;
  & span:first-child {
    font-weight: 700;
    font-size: 13px;
    line-height: 18px;
    /* identical to box height, or 138% */

    letter-spacing: 0.2px;

    /* muted-color */

    color: #bdbdbd;
  }

  & span:last-child {
    font-weight: 700;
    font-size: 13px;
    line-height: 18px;
    /* identical to box height, or 138% */

    text-align: center;
    letter-spacing: 0.2px;

    /* secondary-color-1 */

    color: #004e7c;
  }
`;

const Content = styled.div``;

const Description = styled.p`
  font-weight: 300;
  font-size: 18px;
  line-height: 26px;
  /* or 144% */
  margin-top: 2.8rem;
  letter-spacing: 0.2px;

  color: #858585;
`;

export function Product({ product, view }: ProductProps) {
  console.log(product);
  return (
    <ProductStyles view={view}>
      <img src={product.imageURL} alt="product" />
      <Content>
        <Title>{product.title}</Title>
        <Pricing>
          <span>$16.48</span> <span>${product.price}</span>
        </Pricing>
        {view === "list" && <Description>{product.description}</Description>}
      </Content>
    </ProductStyles>
  );
}
