import Autocomplete from "./components/Autocomplete/Autocomplete";
import GridLights from "./components/GridLights/GridLights";
import { fetchSuggestions } from "./api";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <h1>Autocomplete Component</h1>
        <Autocomplete
          placeholder={"Enter Recipe"}
          fetchSuggestions={fetchSuggestions}
          dataKey={"name"}
        />
      </div>
      <div>
        <h1>Grid Lights</h1>
        <GridLights />
      </div>
    </>
  );
}

export default App;
