import "./App.css";
import Rick from "./components/LocationInfo.js";
import img from './Rick.png';
import imgback from './rickback.jpg';

function App() {

  return (
    <div className="App">
   <img className="PrincImg" src={img} alt=""/>
   <img className="BackImg" src={imgback} alt=""/>
    <Rick/>
    </div>
  );
}

export default App;
