import AppWeather from "./components/AppWeather";
import { WeatherProvider } from "./context/WeatherProvider";

function App() {

  return (
    <WeatherProvider>
      <header>
        <h1>Busqueda de Clima</h1>
      </header>
      <AppWeather />
    </WeatherProvider>
  )
}

export default App;
