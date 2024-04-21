import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="space-y-2">
      <Skeleton className="h-4 w-[250px]" />Loading
      <Skeleton className="h-4 w-[200px]" />
    </div>
  );
}
