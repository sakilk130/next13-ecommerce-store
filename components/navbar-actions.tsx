'use client';

import { ShoppingBag } from 'lucide-react';
import { useRouter } from 'next/navigation';

import { Button } from './ui/button';
import { useEffect, useState } from 'react';

const NavbarActions = () => {
  const router = useRouter();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="flex items-center ml-auto gap-x-4">
      <Button
        onClick={() => router.push('/cart')}
        className="flex items-center px-4 py-2 bg-black rounded-full"
      >
        <ShoppingBag size={20} color="white" />
        <span className="ml-2 text-sm font-medium text-white">0</span>
      </Button>
    </div>
  );
};

export { NavbarActions };
