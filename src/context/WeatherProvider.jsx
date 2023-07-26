import axios from "axios";
import { createContext, useState } from "react";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {

  const [search, setSearch] = useState({
    country: '',
    city: '',
  })

  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);

  const createSearch = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    })
  }

  const getWeather = async data => {
    setLoading(true);
    const { country, city } = data;
    const appID = import.meta.env.VITE_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appID}`;
    try {
      const { data } = await axios(url);
      setWeather(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <WeatherContext.Provider
      value={{
        search,
        createSearch,
        getWeather,
        weather,
        loading,
      }}
    >
      {children}
    </WeatherContext.Provider>
  )
}

export default WeatherContext;