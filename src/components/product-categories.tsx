import { ScrollArea, ScrollBar } from "~/components/ui/scroll-area";
import { Separator } from "~/components/ui/separator";

import { flashSaleProducts as mockCategories } from "~/data/products";
import { cn } from "~/lib/utils";
import Image from "next/image";

// TODO #5: Import api and making a request to get categories
// TODO #6: Render categories

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
            {mockCategories.map((category, index) => {
              return (
                <div key={index} className="relative w-[250px] space-y-3">
                  <Image
                    src={category.image}
                    alt={category.name}
                    width={250}
                    height={250}
                    className={cn(
                      "h-auto w-auto rounded-xl object-cover opacity-40 transition-all hover:scale-105",
                      aspectRatio === "portrait"
                        ? "aspect-[3/4]"
                        : "aspect-square"
                    )}
                  />
                  <h2
                    className={cn(
                      "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-sm bg-gradient-to-b from-red-200 to-gray-100 p-2 text-lg font-bold uppercase"
                    )}
                  >
                    Category
                  </h2>
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
