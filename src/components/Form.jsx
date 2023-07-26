
export default function Form() {
  return (
    <div className="container">
      <form>
        <div className="field">
          <label htmlFor="country">País</label>
          <select
            name="country"
            id="country"
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