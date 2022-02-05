import './App.css';
import {MySlider} from "./MySlider";

//9 = 5
// 8 = 4
//7 = 3
// 6 = 2
// 5 = 1
// 4 = 0


const info = [
    {name: "Mark"},
    {name: "Darrel"},
    {name: "Dave"},
    {name: "Brendan"},
    {name: "Neill"},
    {name: "Kavyaa"},
    {name: "Judith"},
]
function App() {
  return (
    <div className="App">
        <MySlider info={info}/>
    </div>
  );
}

export default App;
