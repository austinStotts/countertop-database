import './App.css';
import Make from "./components/makes";
import data from "./data";

function App() {
  return (
    <div className="App">
      countertop-database
      {Object.keys(data).map((v) => {
        return (<Make name={v}/>)
      })}
    </div>
  );
}

export default App;
