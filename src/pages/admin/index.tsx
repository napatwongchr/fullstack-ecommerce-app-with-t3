import { Sidebar } from "~/components/admin-sidebar";
import { Separator } from "~/components/ui/separator";
import CreateCategoryForm from "./create-category-form";

export default function CreateCategoryPage() {
  return (
    <>
      <div className="bg-background">
        <div className="grid lg:grid-cols-5">
          <Sidebar className="hidden lg:block" />
          <div className="col-span-3 lg:col-span-4 lg:border-l">
            <div className="h-full space-y-4 px-4 py-6 lg:px-8">
              <div>
                <h2 className="text-lg font-medium">Categories</h2>
                <p className="text-sm text-muted-foreground">
                  Create categories to organize your products.
                </p>
              </div>
              <Separator />
              <CreateCategoryForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
