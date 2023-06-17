import { FlashSaleItems } from "~/components/flash-sale-items";
import { MainNav } from "~/components/main-nav";
import { ProductCategories } from "~/components/product-categories";
import { Search } from "~/components/search";
import { UserNav } from "~/components/user-nav";

export default function Home() {
  return (
    <>
      <div className="flex justify-between border-b-[1px] border-gray-100 bg-white p-3">
        <div className="flex items-center justify-center space-x-4">
          <h1 className="text-lg font-bold">🛍️ E-Commerce</h1>
          <MainNav />
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <Search />
          <UserNav />
        </div>
      </div>
      <div className="space-y-8 px-20 py-10">
        <ProductCategories />
        <FlashSaleItems />
      </div>
    </>
  );
}
