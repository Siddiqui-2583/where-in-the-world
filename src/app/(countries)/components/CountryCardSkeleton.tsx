
import { Card } from "@components/ui/card";
import { Skeleton } from "@components/ui/skeleton";

const CountryCardSkeleton: React.FC = () => {
  return (
    <Card className="cursor-pointer overflow-hidden">
      <Skeleton className="w-full h-48 object-cover bg-gray-500 rounded-b-none" />
      <div className="p-4">
        <Skeleton className="h-6 mb-2 w-3/4 bg-gray-500" />
        <Skeleton className="h-4 mb-1 w-1/2 bg-gray-500" />
        <Skeleton className="h-4 mb-1 w-1/3 bg-gray-500" />
        <Skeleton className="h-4 mb-1 w-1/4 bg-gray-500" />
      </div>
    </Card>
  );
};

export default CountryCardSkeleton;
