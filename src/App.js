import './App.css';
import LineChart from "./Components/LineChart";

const state = {
  data:[3910, 3706, 2850, 4005, 3750, 2912, 3200, 3645, 4205, 3211, 3354, 3904],
  average: [4010, 3600, 2900, 3550, 3800, 2900, 3000, 3500, 4000, 3700, 3550, 3800],
  labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
}

function App() {
  return (
    <div className="App">
      <h2>Test App with Chart.JS</h2>
      <div className="chart">
          <LineChart
            data={state.data}
            average={state.average}
            labels={state.labels} 
          />
        </div>
    </div>
  );
}

export default App;
