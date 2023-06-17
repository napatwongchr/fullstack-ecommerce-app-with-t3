import { Pencil } from "lucide-react";

import { cn } from "~/lib/utils";
import { Button } from "~/components/ui/button";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-4 py-2">
          <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">
            Product
          </h2>
          <div className="space-y-1">
            <Button
              variant="secondary"
              size="sm"
              className="w-full justify-start"
            >
              <Pencil className="mr-2 h-4 w-4" />
              Create Category
            </Button>
            <Button variant="ghost" size="sm" className="w-full justify-start">
              <Pencil className="mr-2 h-4 w-4" />
              Create Product
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
