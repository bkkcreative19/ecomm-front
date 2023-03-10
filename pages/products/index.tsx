import type { NextPage } from "next";

import { PageContainer } from "../../features/ui/page-container";
import { ProductList } from "../../features/product/components/project-list";
import { Filters } from "../../features/product/components/filters";
import { BsChevronRight } from "react-icons/bs";

import styled from "styled-components";
import { Layout } from "../../features/ui/layout";

const Main = styled.div`
  display: flex;
  gap: 60px;
  padding: 0 1rem;

  @media (max-width: 750px) {
    flex-direction: column;
  }
`;

const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: url("/bg.jpg") no-repeat center;
  filter: brightness(0.5);
  background-size: cover;
  height: 500px;
`;

const Title = styled.h2`
  font-family: Oswald, sans-serif;
  font-weight: 500;
  font-size: 26px;
  line-height: 30px;
  /* identical to box height, or 115% */

  letter-spacing: 0.1px;

  /* text-color */

  color: #252b42;
`;

const Location = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  & span:first-child {
    font-weight: 300;
    font-size: 15px;
    line-height: 24px;
    /* identical to box height, or 160% */

    text-align: center;
    letter-spacing: 0.2px;

    /* text-color */

    color: #252b42;
  }

  & span:last-child {
    font-weight: 700;
    font-size: 13px;
    line-height: 18px;
    /* identical to box height, or 138% */

    text-align: center;
    letter-spacing: 0.2px;

    /* muted-text-color */

    color: #bdbdbd;
  }
`;

const ProductPage: NextPage = () => {
  return (
    <>
      <Head>
        <h2>SHOP</h2>
        {/* <Title>Shop</Title>
        <Location>
          <span>Home</span>
          <BsChevronRight size={"1.7rem"} color="#BDBDBD" />
          <span>Shop</span>
        </Location> */}
      </Head>
      <Layout>
        <Main>
          <Filters />
          <ProductList />
        </Main>
      </Layout>
    </>
  );
};

export default ProductPage;
