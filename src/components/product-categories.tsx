import { ScrollArea, ScrollBar } from "~/components/ui/scroll-area";
import { Separator } from "~/components/ui/separator";

import { flashSaleProducts } from "~/data/products";
import { cn } from "~/lib/utils";
import Image from "next/image";

export function ProductCategories() {
  const aspectRatio = "portrait";
  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <h2 className="text-2xl font-semibold tracking-tight">
          Product Categories 🍎
        </h2>
        <p className="text-sm text-muted-foreground">
          Product categories for you
        </p>
      </div>
      <Separator />
      <div className="relative">
        <ScrollArea>
          <div className="flex space-x-4 pb-4">
            {flashSaleProducts.map((product, index) => {
              return (
                <div key={index} className="w-[250px] space-y-3">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={250}
                    height={250}
                    className={cn(
                      "h-auto w-auto rounded-xl object-cover transition-all hover:scale-105",
                      aspectRatio === "portrait"
                        ? "aspect-[3/4]"
                        : "aspect-square"
                    )}
                  />
                  <div className="space-y-1 text-sm">
                    <h3 className="font-medium leading-none">{product.name}</h3>
                    <p className="truncate text-xs text-muted-foreground">
                      {product.description}
                    </p>
                  </div>
                  <div className="flex justify-between text-sm">
                    <h4 className="font-medium leading-none">
                      {product.price} ฿
                    </h4>
                    <p className="truncate text-xs text-muted-foreground">
                      50k Sold
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </div>
  );
}
