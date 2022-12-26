import React from "react";
import { Layout } from "../../features/ui/layout";
import { useProduct } from "../../features/product/api/use-product";
import { useRouter } from "next/router";
import { ProductInfo } from "../../features/product/components/product-info";

export default function ProductDetails() {
  const router = useRouter();

  const { data } = useProduct(router.query.id);

  return (
    <>
      <Layout>{data && <ProductInfo data={data} />}</Layout>
    </>
  );
}
