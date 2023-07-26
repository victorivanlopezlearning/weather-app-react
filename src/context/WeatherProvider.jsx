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

  return (
    <WeatherContext.Provider
      value={{
        search,
        createSearch,
      }}
    >
      {children}
    </WeatherContext.Provider>
  )
}

export default WeatherContext;