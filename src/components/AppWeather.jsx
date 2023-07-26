import useWeather from "../hooks/useWeather";
import Form from "./Form";
import Spinner from "./Spinner";
import Weather from "./Weather";

export default function AppWeather() {

  const { weather, loading } = useWeather();

  return (
    <>
      <main className="two-columns">
        <Form />

        {loading ? <Spinner /> :
          (Object.keys(weather).length) ? <Weather /> : <p>Selecciona tu país y ciudad para consultar el clima.</p>}
      </main>
    </>
  )
}
