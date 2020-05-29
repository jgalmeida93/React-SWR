import React from "react";

import useSwr from "swr";

import DisplayCrimes from "./DisplayCrimes";

export default function Crimes() {
  const url =
    "https://data.police.uk/api/crimes-street/all-crime?lat=52.629729&lng=-1.131592&date=2019-10";
  const { data, error } = useSwr(url);

  if (error) {
    return <div>Error...</div>;
  }
  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <DisplayCrimes
      crimes={data}
      categories={[...new Set(data.map((crime) => crime.category))]}
    />
  );
}
