import useWeather from "../hooks/useWeather";
import Form from "./Form";
import Weather from "./Weather";

export default function AppWeather() {

  const { weather } = useWeather();

  return (
    <>
      <main className="two-columns">
        <Form />

        {(Object.keys(weather).length) ? <Weather /> : <p>Selecciona tu país y ciudad para consultar el clima.</p>}
      </main>
    </>
  )
}
