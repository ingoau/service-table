import { cn } from "@/lib/utils";

export default function AiButton({ className }: { className?: string }) {
  return (
    <button
      className={cn(className, "")}
      onClick={() => {
        location.href = "/ai";
      }}
    >
      AI
    </button>
  );
}
