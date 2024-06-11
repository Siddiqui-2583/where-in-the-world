import Image from "next/image";

interface CountryCardProps {
  name: string;
  population: number;
  region: string;
  capital: string;
  flagUrl: string;
}

const CountryCard: React.FC<CountryCardProps> = ({
  name,
  population,
  region,
  capital,
  flagUrl,
}) => {
  return (
    <div className="bg-white dark:bg-black shadow-md rounded-lg overflow-hidden">
      <Image
        src={flagUrl}
        alt={`${name} flag`}
        width={400}
        height={200}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 ">
        <h3 className="font-bold text-xl mb-2">{name}</h3>
        <p>
          <strong>Population:</strong> {population.toLocaleString()}
        </p>
        <p>
          <strong>Region:</strong> {region}
        </p>
        <p>
          <strong>Capital:</strong> {capital}
        </p>
      </div>
    </div>
  );
};

export default CountryCard;
