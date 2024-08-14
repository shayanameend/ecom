"use client";

import { useEffect } from "react";
import { toast } from "sonner";
import { Button } from "~/components/ui/button";

export default function HomePage() {
  useEffect(() => {
    console.log("Hello world!");
    toast("Hello world!");
  }, []);

  return (
    <main>
      <Button variant={"destructive"}>Click me</Button>
    </main>
  );
}
