import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Layoutgrid} from "../src/components/Layout/Layoutgrid";
// import {Gridlayout} from './components/Second_Layout/Gridlayout';

function App() {
  return(
  <div className="App">
      <Layoutgrid />
      {/* <Gridlayout /> */}
    </div>
  );
}
export default App;
