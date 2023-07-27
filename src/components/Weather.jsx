import { kelvinToCelsius } from "../helpers/kelvinToCelsius";
import useWeather from "../hooks/useWeather";

export default function Weather() {

  const { weather } = useWeather();
  const { name, main: { temp, temp_max, temp_min } } = weather;

  return (
    <div className="container weather-content">
      <h2>Clima en {name}</h2>

      <p className="weather-temp">
        {kelvinToCelsius(temp)}
        <span> &#x2103;</span>
      </p>

      <div className="content-min-max">
        <p className="weather-min">
          Mín: {kelvinToCelsius(temp_min)}
          <span> &#x2103;</span>
        </p>

        <p className="weather-max">
          Máx: {kelvinToCelsius(temp_max)}
          <span> &#x2103;</span>
        </p>
      </div>
    </div>
  )
}
