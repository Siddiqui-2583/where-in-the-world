import Image from "next/image";
import React from "react";
import InfoItem from "./InfoItem";

interface CountryDetailsCardProps {
  data: {
    flagUrl: string;
    name: string;
    nativeName: string;
    population: number;
    region: string;
    subregion: string;
    capital: string;
    topLevelDomain: string[];
    currencies: string;
    languages: string[];
    borderCountries: string[];
  };
}

const CountryDetailsCard: React.FC<CountryDetailsCardProps> = ({
  data,
}) => {
  return (
    <div className="w-full flex flex-col md:flex-row gap-[100px]">
      <div className=" max-w-[950px]">
        <Image
          src={data.flagUrl}
          alt={`Flag of ${data.name}`}
          width={500}
          height={400}
          className=" "
        />
      </div>

      <div className="w-full min-w-[400px] flex flex-col justify-center">
        <h1 className="font-bold text-3xl mb-6">{data.name}</h1>
        <div className="grid grid-cols-2 gap-2">
          <InfoItem title="Native Name" value={data.nativeName} />
          <InfoItem
            title="Population"
            value={data.population.toLocaleString()}
          />
          <InfoItem title="Region" value={data.region} />
          <InfoItem title="Sub Region" value={data.subregion} />
          <InfoItem title="Capital" value={data.capital} />
          <InfoItem
            title="Top Level Domain"
            value={data.topLevelDomain.join(", ")}
          />
          <InfoItem title="Currencies" value={data.currencies} />
          <InfoItem title="Languages" value={data.languages.join(", ")} />
        </div>
        <InfoItem
          className="mt-6"
          title="Border Countries"
          value={data.borderCountries.map((item,index)=><div className="p-2 border shadow-sm" key={index}>
{item}
          </div>)}
        />
      </div>
    </div>
  );
};

export default CountryDetailsCard;
