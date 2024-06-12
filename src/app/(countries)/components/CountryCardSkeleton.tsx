
import { Card } from "@components/ui/card";
import { Skeleton } from "@components/ui/skeleton";

const CountryCardSkeleton: React.FC = () => {
  return (
    <Card className="cursor-pointer overflow-hidden">
      <Skeleton className="w-full h-48 object-cover" />
      <div className="p-4">
        <Skeleton className="h-6 mb-2 w-3/4" />
        <Skeleton className="h-4 mb-1 w-1/2" />
        <Skeleton className="h-4 mb-1 w-1/3" />
        <Skeleton className="h-4 mb-1 w-1/4" />
      </div>
    </Card>
  );
};

export default CountryCardSkeleton;
