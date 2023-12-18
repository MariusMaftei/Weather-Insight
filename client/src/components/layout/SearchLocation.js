import React, { useState } from "react";
import classes from "./SearchLocation.module.css";
import Wrapper from "../UI/Wrapper";
import Dropdown from "../UI/Dropdown";
import FilterBox from "../UI/FilterBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Modal from "../UI/Modal";

export default function SearchLocation({
  regions,
  selectedRegion,
  setSelectedRegion,
  countries,
  cities,
  selectedCountry,
  setSelectedCountry,
  selectedCity,
  setSelectedCity,
  countryID,
}) {
  const [showModal, setShowSModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleRegionSelect = (selected) => {
    setSelectedRegion(selected);
  };

  const handleCountrySelect = (selected) => {
    setSelectedCountry(selected);
  };

  const handleCitySelect = (selected) => {
    setSelectedCity(selected);
  };

  const handleClearRegionFilter = () => {
    setSelectedRegion("Select a region");
  };

  const handleClearCountryFilter = () => {
    setSelectedCountry("Select a country");
  };

  const handleClearCityFilter = () => {
    setSelectedCity("Select a city");
  };

  const handleClearAllFilters = () => {
    setSelectedRegion("Select a region");
    setSelectedCountry("Select a country");
    setSelectedCity("Select a city");
  };

  const addToFavorites = async (e) => {
    e.preventDefault();
    if (
      selectedRegion !== "Select a region" &&
      selectedCountry !== "Select a country" &&
      selectedCity !== "Select a city"
    ) {
      const newPost = {
        region: selectedRegion,
        country: selectedCountry,
        city: selectedCity,
        countryID: countryID,
      };

      try {
        await axios.post("/posts", newPost);

        setModalMessage(`Successful add ${selectedCity} to favorites!`);
        setShowSModal(true);
      } catch (err) {
        console.error("Failed to create a new post", err);

        if (err.response && err.response.status === 500) {
          setModalMessage(` ${selectedCity} already exist in favorite list!`);
          setShowSModal(true);
        } else {
          setModalMessage("Failed to add the city");
          setShowSModal(true);
        }
      }
    } else {
      setModalMessage(
        "Please select a region, country, and city before adding them to favorites"
      );
      setShowSModal(true);
    }
  };

  const closeModal = () => {
    setShowSModal(false);
    setModalMessage("");
  };

  return (
    <div className={classes.container}>
      <Wrapper>
        <div className={classes.dropdownContainer}>
          <Dropdown
            costumeOptions={regions.map((regions) => regions.LocalizedName)}
            selected={selectedRegion}
            setSelected={setSelectedRegion}
            onSelect={handleRegionSelect}
          />
          <Dropdown
            costumeOptions={countries.map((country) => country.LocalizedName)}
            selected={selectedCountry}
            setSelected={setSelectedCountry}
            onSelect={handleCountrySelect}
          />
          <Dropdown
            costumeOptions={cities.map((city) => city.LocalizedName)}
            selected={selectedCity}
            setSelected={setSelectedCity}
            onSelect={handleCitySelect}
          />
          <FontAwesomeIcon
            className={classes.favoritesIcon}
            icon={faStar}
            onClick={addToFavorites}
          />
          {showModal && (
            <Modal onClose={closeModal}>
              <div className={classes.modalMessage}>
                <span>{modalMessage}</span>
                <button onClick={closeModal}>Close</button>
              </div>
            </Modal>
          )}
        </div>

        <div className={classes.filters}>
          {selectedRegion !== "Select a region" && (
            <FilterBox
              filteredItem={selectedRegion}
              onClearFilter={handleClearRegionFilter}
            />
          )}
          {selectedCountry !== "Select a country" && (
            <FilterBox
              filteredItem={selectedCountry}
              onClearFilter={handleClearCountryFilter}
            />
          )}
          {selectedCity !== "Select a city" && (
            <FilterBox
              filteredItem={selectedCity}
              onClearFilter={handleClearCityFilter}
            />
          )}
          {(selectedRegion !== "Select a region" ||
            selectedCountry !== "Select a country" ||
            selectedCity !== "Select a city") && (
            <FilterBox
              filteredItem={"Remove all filters"}
              onClearFilter={handleClearAllFilters}
            />
          )}
        </div>
      </Wrapper>
    </div>
  );
}
