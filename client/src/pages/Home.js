import React, { useEffect, useState } from "react";
import InfoLocation from "../components/layout/InfoLocation";
import SearchLocation from "../components/layout/SearchLocation";
import classes from "./Home.module.css";
import Ambient from "../components/UI/Ambient";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Home() {
  const { id } = useParams();
  const [regions, setRegions] = useState([]);
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [cityInfo, setCityInfo] = useState([]);
  const [cityWeatherInfo, setCityWeatherInfo] = useState([]);
  const [selectedCountryID, setSelectedCountryID] = useState(null);

  const [selectedRegion, setSelectedRegion] = useState("Select a region");
  const [selectedCountry, setSelectedCountry] = useState("Select a country");
  const [selectedCity, setSelectedCity] = useState("Select a city");

  const apiKey = process.env.REACT_APP_ACCU_WEATHER_API_KEY;
  useEffect(() => {
    const fetchData = async () => {
      const baseURL = "http://dataservice.accuweather.com/";
      const locationsParamsURL = "locations/v1/";
      const weatherParamsURL = "/currentconditions/v1/";
      const apiKeyParams = `?apikey=${apiKey}`;
      const regionParams = "regions";
      const countryParams = "countries/";
      const cityParams = "adminareas/";
      const cityInfoParams = "cities/search";

      // GET REGIONS NAME //

      try {
        const regionsData = await axios.get(
          baseURL + locationsParamsURL + regionParams + apiKeyParams
        );

        setRegions(regionsData.data);

        // GET COUNTRIES NAME //
        if (selectedRegion !== "Select a region") {
          const countriesData = await axios.get(
            baseURL +
              locationsParamsURL +
              countryParams +
              selectedRegion +
              apiKeyParams
          );

          setCountries(countriesData.data);

          const selectedCountryObject = countriesData.data.find(
            (country) => country.LocalizedName === selectedCountry
          );

          if (selectedCountryObject) {
            const newSelectedCountryID = selectedCountryObject.ID;

            setSelectedCountryID(newSelectedCountryID);

            // GET CITIES NAME //
            if (selectedCountry !== "Select a country") {
              const citiesData = await axios.get(
                baseURL +
                  locationsParamsURL +
                  cityParams +
                  newSelectedCountryID +
                  selectedCountry +
                  apiKeyParams
              );

              setCities(citiesData.data);

              // GET CITY INFO DATA //

              if (selectedCity !== "Select a city") {
                const cityInfoData = await axios.get(
                  baseURL +
                    locationsParamsURL +
                    cityInfoParams +
                    apiKeyParams +
                    `&q=${selectedCity}`
                );

                setCityInfo(cityInfoData.data);
                // GET WEATHER DATA //

                const cityKey =
                  cityInfoData.data.length > 0
                    ? cityInfoData.data[0].Key
                    : null;

                if (cityKey) {
                  const weatherCityData = await axios.get(
                    baseURL + weatherParamsURL + cityKey + apiKeyParams
                  );
                  setCityWeatherInfo(weatherCityData.data);
                  console.log(weatherCityData.data);
                }
              }
            }
          }
        }

        if (id) {
          const postResponse = await axios.get(`/posts/${id}`);
          const postData = postResponse.data;

          setSelectedRegion(postData.region || "Select a region");
          setSelectedCountry(postData.country || "Select a country");
          setSelectedCity(postData.city || "Select a city");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [
    id,
    selectedRegion,
    selectedCountry,
    selectedCity,
    selectedCountryID,
    apiKey,
  ]);
  return (
    <div className={classes.container}>
      <Ambient>
        <InfoLocation cityInfo={cityInfo} cityWeatherInfo={cityWeatherInfo} />
        <SearchLocation
          regions={regions}
          selectedRegion={selectedRegion}
          setSelectedRegion={setSelectedRegion}
          countries={countries}
          cities={cities}
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
          selectedCity={selectedCity}
          setSelectedCity={setSelectedCity}
          countryID={selectedCountryID}
        />
      </Ambient>
    </div>
  );
}
