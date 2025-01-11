import { Download } from 'lucide-react';

import { Button } from '@/components/ui/button';

function Header() {
  return (
    <>
      <div className="bordesr-b flex w-full justify-between border border-gray-400 px-5 py-7">
        <h1 className="text-[24px] font-extrabold">Crowd Sourcing</h1>
        <Button className="rounded-xl">
          <Download /> Export
        </Button>
      </div>
    </>
  );
}

export default Header;
