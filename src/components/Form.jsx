import useWeather from "../hooks/useWeather";

export default function Form() {

  const { search, createSearch } = useWeather();
  const { country, city } = search;

  return (
    <div className="container">
      <form
        onSubmit={handleSubmit}
      >
        <div className="field">
          <label htmlFor="country">País</label>
          <select
            name="country"
            id="country"
            onChange={createSearch}
            value={country}
          >
            <option value="">-- Seleccione País --</option>
            <option value="US">Estados Unidos</option>
            <option value="MX">México</option>
            <option value="AR">Argentina</option>
            <option value="CO">Colombia</option>
            <option value="CR">Costa Rica</option>
            <option value="ES">España</option>
            <option value="PE">Perú</option>
          </select>
        </div>

        <div className="field">
          <label htmlFor="city">Ciudad</label>
          <input
            type="text"
            name="city"
            id="city"
            onChange={createSearch}
            value={city}
          />
        </div>

        <input
          type="submit"
          value="Consultar Clima"
        />
      </form>
    </div>
  )
}