import { Card } from "@components/ui/card";
import Image from "next/image";
import InfoItem from "./InfoItem";

interface CountryCardProps {
  name: string;
  population: number;
  region: string;
  capital: string;
  flagUrl: string;
  onClickHandler:()=>void
}

const CountryCard: React.FC<CountryCardProps> = ({
  name,
  population,
  region,
  capital,
  flagUrl,onClickHandler
}) => {
  return (
    <Card className="cursor-pointer overflow-hidden" onClick={onClickHandler}>
      <Image
        src={flagUrl}
        alt={`${name} flag`}
        width={400}
        height={200}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 ">
        <h3 className="font-bold text-xl mb-2">{name}</h3>
        <InfoItem title="Population" value={population.toLocaleString()} />
        <InfoItem title="Region" value={region} />
        <InfoItem title="Capital" value={capital} />
      </div>
    </Card>
  );
};

export default CountryCard;
