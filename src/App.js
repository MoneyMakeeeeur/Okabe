import "./App.css";
import Buy from "./Components/Buy";
import Herosection from "./Components/Herosection";
import Navbar from "./Components/Navbar";
import Roadmap from "./Components/Roadmap";
import Tokenomics from "./Components/Tokenomics";

function App() {
  return (
    <div>
      <Navbar />
      <Herosection />
      <Tokenomics />
      <Roadmap />
      <Buy />
    </div>
  );
}

export default App;
