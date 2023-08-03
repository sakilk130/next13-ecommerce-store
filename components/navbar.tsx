import Link from 'next/link';

import { getCategories } from '@/actions';
import { MainNav } from '@/components/main-nav';
import { NavbarActions } from '@/components/navbar-actions';
import { Container } from '@/components/ui/container';

const Navbar = async () => {
  const categories = await getCategories();
  return (
    <div className="border-b">
      <Container>
        <div className="relative flex items-center h-16 px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex ml-4 lg:ml-0 gap-x-2">
            <p className="text-xl font-bold">STORE</p>
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};

export { Navbar };
