import Dictionary from "./Dictionary";
import "./App.css";
import logo from "./dictionary.png";

export default function App() {
  return (
    <div className="App">
      <img src={logo} width="90" alt="" />
      <Dictionary defaultKeyword="wine" />
    </div>
  );
}
