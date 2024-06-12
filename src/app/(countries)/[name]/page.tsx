"use client";

import React from "react";
import CountryDetailsCard from "../components/CountryDetailsCard";
import { useRouter, useSearchParams } from "next/navigation";
import { useGetCountryQuery } from "../redux/countriesApi";

export default function CountryDetailsPage({
  params,
}: {
  params: { name: string };
}) {
  const router = useRouter();
  const { data, isLoading, isError } = useGetCountryQuery(params?.name);
  const onBackClick = () => {
    router.back();
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading countries data</div>;
  return (
    <div className="pt-[68px] container mx-auto p-4">
      <button
        onClick={onBackClick}
        className="py-2 px-4 rounded-sm shadow-sm border my-12 bg-card"
      >
        Back
      </button>
      {data.length > 0 && (
        <CountryDetailsCard
          data={{
            flagUrl: data[0].flags.svg,
            name: data[0].name.common,
            nativeName:
              data[0].name.nativeName && data[0].name.nativeName?.nld?.common
                ? data[0].name.nativeName?.nld?.common
                : "N/A",
            // nativeName: data[0].name.nativeName
            //   ? Object.values(data[0].name.nativeName)[0].common
            //   : "N/A",
            population: data[0].population,
            region: data[0].region,
            subregion: data[0].subregion,
            capital: data[0].capital ? data[0].capital[0] : "N/A",
            topLevelDomain: data[0].tld,
            currencies: Object.values(data[0].currencies)
              .map((currency: any) => currency.name)
              .join(", "),
            languages: Object.values(data[0].languages),
            borderCountries: data[0].borders || [],
          }}
        />
      )}
    </div>
  );
}
