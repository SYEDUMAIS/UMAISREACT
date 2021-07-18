import logo from './logo.svg';
import './App.css';
import {Courseinfo} from "./components/Courseinfo";

function App() {
  return (
    <div className="App">
      <Courseinfo courseName="PDAC" Institute="PickupBiz" ContactNo="9999999999" city="Nanded" />
      <Courseinfo courseName="DAC" Institute="Seed Infotech" ContactNo="9896669999" city="Pune" />
      <Courseinfo courseName="Networking" Institute="Naresh IT" ContactNo="9896664444" city="Hyd" />
    </div>
  );
}

export default App;
