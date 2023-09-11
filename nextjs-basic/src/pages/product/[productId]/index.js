import { useRouter } from "next/router";

const ProductDeatils = () => {
  const router = useRouter();
  const productId = router.query.productId;
  return <div>Deatils about page - {productId}</div>;
};

export default ProductDeatils;
