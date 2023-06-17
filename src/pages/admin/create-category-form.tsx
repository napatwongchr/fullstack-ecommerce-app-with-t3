import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import * as React from "react";

const { useState } = React;

export default function CreateCategoryForm() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ name, image });
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          type="text"
          placeholder="Enter category name"
          className="h-9 md:w-[100px] lg:w-[300px]"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="name">Image</Label>
        <Input
          type="text"
          placeholder="Enter category image url"
          className="h-9 md:w-[100px] lg:w-[300px]"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
}
