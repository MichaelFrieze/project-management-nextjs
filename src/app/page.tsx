import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <Button variant={"ghost"} size={"lg"}>
        Click Me
      </Button>
      <p className="font-semibold text-red-500">Mike Frieze</p>
    </div>
  );
}
