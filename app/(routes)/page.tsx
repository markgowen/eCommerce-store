import getBanner from "@/actions/get-banner";
import getProducts from "@/actions/get-products";

import Banner from "@/components/banner";
import Container from "@/components/ui/container";
import ProductList from "@/components/product-list";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const banner = await getBanner("617c518f-fa87-4a3a-9591-a51e92e9a896");
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Banner data={banner} />
      </div>
      <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
        <ProductList title="Featured Products" items={products} />
      </div>
    </Container>
  );
};

export default HomePage;