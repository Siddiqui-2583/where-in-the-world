"use client";
import Image from "next/image";
import { useGetCountriesQuery, useGetCountryQuery } from "./redux/countriesApi";
import { useEffect, useState } from "react";
import CountryCard from "./components/CountryCard";
import { Input } from "@components/ui/input";
import { Search } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@components/ui/select";
import { filterOptions } from "./config";

export default function CountriesHome() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const { data: countries, isLoading, isError } = useGetCountriesQuery(null);
  const {
    data: country,
    isLoading: isCountryLoading,
    isError: isCountryError,
  } = useGetCountryQuery(selectedId);

  useEffect(() => {
    console.log("countries", countries);
  }, [countries]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleRegionChange = (value:string) => {
    setSelectedRegion(value);
  };

  const filteredCountries = countries?.filter(
    (country: any) =>
      country.name.common.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedRegion === "" || country.region === selectedRegion)
  );

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading countries data</div>;

  return (
    <div className="pt-[68px] container mx-auto p-4">
      <div className="flex flex-col md:flex-row justify-between items-center my-12 ">
        <div className="relative w-full max-w-[480px] bg-card">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search />
          </span>
          <Input
            type="text"
            placeholder="Search for a country..."
            className="rounded w-full max-w-[480px] h-[56px] pl-10"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>

        <Select
          onValueChange={handleRegionChange}
          value={selectedRegion}
          defaultValue="Asia"
        >
          <SelectTrigger className="h-[56px] max-w-[200px] bg-card">
            <SelectValue placeholder="Filter" />
          </SelectTrigger>
          <SelectContent>
            {filterOptions?.map((item, index) => (
              <SelectItem key={index} value={item}>
                {item}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredCountries &&
          filteredCountries.map((country: any) => (
            <CountryCard
              key={country.cca3}
              name={country.name.common}
              population={country.population}
              region={country.region}
              capital={country.capital ? country.capital[0] : "N/A"}
              flagUrl={country.flags.svg}
            />
          ))}
      </div>
    </div>
  );
}
