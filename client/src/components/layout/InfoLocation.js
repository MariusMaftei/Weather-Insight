import classes from "./InfoLocation.module.css";
import Wrapper from "../UI/Wrapper";
import Card from "../UI/Card";
import Clock from "../UI/Clock";
import WeatherInfo from "../UI/WeatherInfo";
import CityInfo from "../UI/CityInfo";
import defaultFlagIcon from "../../assets/images/europeFlag.png";
import CityMap from "../UI/CityMap";

export default function InfoLocation({ cityInfo, cityWeatherInfo }) {
  const formatWeatherIcon = (icon) => {
    const iconString = icon.toString();
    return iconString.length === 1 ? `0${iconString}` : iconString;
  };

  const weatherIconLink = cityWeatherInfo[0]?.WeatherIcon
    ? `https://developer.accuweather.com/sites/default/files/${formatWeatherIcon(
        cityWeatherInfo[0]?.WeatherIcon
      )}-s.png`
    : "https://developer.accuweather.com/sites/default/files/06-s.png";

  const flagIconLink = cityInfo[0]?.Country?.ID
    ? `https://flagsapi.com/${cityInfo[0]?.Country?.ID}/flat/64.png`
    : defaultFlagIcon;

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <Wrapper>
          <div className={classes.cityMap}>
            <CityMap
              lat={cityInfo[0]?.GeoPosition?.Latitude || "0"}
              lng={cityInfo[0]?.GeoPosition?.Longitude || "0"}
            />
          </div>
        </Wrapper>
        <div className={classes.cardsContainer}>
          <Card
            title={"Today weather"}
            description={`${cityInfo[0]?.Country.EnglishName || "Somewhere"} ${
              cityInfo[0]?.LocalizedName || "on Earth"
            }`}
          >
            <WeatherInfo
              temperature={cityWeatherInfo[0]?.Temperature.Metric.Value || "5"}
              weatherText={cityWeatherInfo[0]?.WeatherText || "	Mostly Cloudy"}
              weatherIcon={weatherIconLink}
            />
          </Card>

          <Card
            title={"Location Info"}
            description={`${cityInfo[0]?.Country.EnglishName || "Europe"} ${
              cityInfo[0]?.LocalizedName || ""
            }`}
          >
            <CityInfo
              flagIcon={flagIconLink}
              countryName={
                cityInfo[0]?.Country?.EnglishName
                  ? "Capital of " + cityInfo[0]?.Country?.EnglishName
                  : ""
              }
              capitalName={cityInfo[0]?.TimeZone?.Name?.split("/")[1] || "Flag"}
              latitudeValue={cityInfo[0]?.GeoPosition?.Latitude || "54.5260"}
              longitudeValue={cityInfo[0]?.GeoPosition?.Longitude || "15.2551"}
            />
          </Card>

          <Card
            title={"Local Time"}
            description={`${cityInfo[0]?.Country?.EnglishName || "Your"} ${
              cityInfo[0]?.LocalizedName || "Location"
            }`}
          >
            <Clock
              timeZone={cityInfo[0]?.TimeZone?.Name || "Europe/Bucharest"}
            />
          </Card>
        </div>
      </div>
    </div>
  );
}
