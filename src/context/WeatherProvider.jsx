import { createContext, useState } from "react";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {

  const [search, setSearch] = useState({
    country: '',
    city: '',
  })

  const createSearch = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    })
  }

  const getWeather = data => {
    console.log(data);
  }

  return (
    <WeatherContext.Provider
      value={{
        search,
        createSearch,
        getWeather,
      }}
    >
      {children}
    </WeatherContext.Provider>
  )
}

export default WeatherContext;