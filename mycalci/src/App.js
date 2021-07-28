import logo from './logo.svg';
import './App.css';
// import { Piano } from './Components/Piano App/Piano';
import { Pianoparent } from './Components/Piano App/Pianoparent';
import {EMIcalc} from './Components/EMIcalc';


function App() {
  return (
    <div className="App">
              <Pianoparent />
              <EMIcalc />
    </div>
  );
}

export default App;
