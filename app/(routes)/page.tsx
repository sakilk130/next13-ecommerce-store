import { getBillboard, getProducts } from '@/actions';
import { ProductList } from '@/components/product-list';
import { Billboard } from '@/components/ui/billboard';
import { Container } from '@/components/ui/container';

const HomePage = async () => {
  const billboard = await getBillboard('177fb5c3-cd57-4877-a56c-646cdcd353f2');
  const products = await getProducts({ isFeatured: true });

  return (
    <Container>
      <div className="pb-10 space-y-10">
        <Billboard data={billboard} />
        <div className="flex flex-col px-4 gap-y-8 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
