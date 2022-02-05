import './App.css';
import {MySlider} from "./MySlider";

const info = [
    {name: "Mark"},
    {name: "Darrel"},
    {name: "Dave"},
    {name: "Brendan"},
    {name: "Paddy"}
]
function App() {
  return (
    <div className="App">
        <MySlider info={info}/>
    </div>
  );
}

export default App;
