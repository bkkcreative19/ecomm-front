import React from "react";
import styled from "styled-components";
import { ProductTypes } from "../../types/product";

type ProductInfoProps = {
  data: ProductTypes[];
};

const ProductInfoStyles = styled.div`
  height: 100vh;
  display: flex;
  margin-top: 4rem;
`;

const Image = styled.img`
  width: 500px;
  height: 500px;
  object-fit: contain;
  background: transparent;
  flex: 2;
`;

const Content = styled.div`
  flex: 2;
  padding: 7rem 10rem;
`;

const Title = styled.h2`
  font-family: Oswald, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 49px;
  line-height: 58px;
  /* identical to box height, or 118% */

  letter-spacing: 0.2px;

  /* text-color */

  color: #252b42;
`;

const Price = styled.p`
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  /* identical to box height, or 133% */
  margin-top: 2.3rem;
  letter-spacing: 0.1px;

  /* text-color */

  color: #252b42;
`;

const Description = styled.p`
  font-family: Raleway, sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 26px;
  /* or 144% */

  letter-spacing: 0.2px;
  margin-top: 3.8rem;
  color: #858585;
`;

const Button = styled.button`
  padding: 0.8rem 1.5rem;
  margin-top: 3.7rem;
`;

export function ProductInfo({ data }: ProductInfoProps) {
  const product = data[0];
  return (
    <ProductInfoStyles>
      <Image src={product.imageURL} width={500} height={500} alt="wfaf" />
      <Content>
        <Title>{product.title}</Title>
        <Price>${product.price}</Price>
        Availablity : In Stock
        <Description>{product.description}</Description>
        <Button>Add to Cart</Button>
      </Content>
    </ProductInfoStyles>
  );
}
