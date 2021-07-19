import logo from './logo.svg';
import './App.css';
import {Courseinfo} from "./components/Courseinfo";

function App() {
  return (
    <div className="App">
      
      <table className="class1">
      <td><Courseinfo courseName="PDAC" Institute="PickupBiz" ContactNo="9999999999" city="Nanded" /></td>
      <td><Courseinfo courseName="DAC" Institute="Seed Infotech" ContactNo="9896669999" city="Pune" /></td>
      <td><Courseinfo courseName="Networking" Institute="Naresh IT" ContactNo="9896664444" city="Hyd" /></td>
      </table>
      <hr />
      <table className="class1">
      <td><Courseinfo courseName="PDAC" Institute="PickupBiz" ContactNo="9999999999" city="Nanded" /></td>
      <td><Courseinfo courseName="DAC" Institute="Seed Infotech" ContactNo="9896669999" city="Pune" /></td>
      <td><Courseinfo courseName="Networking" Institute="Naresh IT" ContactNo="9896664444" city="Hyd" /></td>
      </table>
      <hr />
      <table className="class1">
      <td><Courseinfo courseName="PDAC" Institute="PickupBiz" ContactNo="9999999999" city="Nanded" /></td>
      <td><Courseinfo courseName="DAC" Institute="Seed Infotech" ContactNo="9896669999" city="Pune" /></td>
      <td><Courseinfo courseName="Networking" Institute="Naresh IT" ContactNo="9896664444" city="Hyd" /></td>
      </table>
    </div>
  );
}

export default App;
