
import Search from "./components/Search"
import Forecast from "./components/Forecast"
import useForecast from "./hooks/useForecast"

const App = (): JSX.Element => {
  //http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}
  const {
    term,
    options,
    forecast,
    onInputChange,
    onOptionSelect,
    onSubmit
  } = useForecast()

  return (
    <main className="flex justify-center items-center bg-gradient-to-br from-sky-400 via-rose-400 to-lime-400 h-[100vh] w-full">
      {forecast ? (
        <Forecast data={forecast} />
      ) : (
        <Search
          term={term}
          options={options}
          onInputChange={onInputChange}
          onOptionSelect={onOptionSelect}
          onSubmit={onSubmit}
        />
      )}
    </main>
  )
}

export default App
