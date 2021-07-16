import Wrapper from "./components/Wrapper";
import Card from "./components/Card";
import Attribution from "./components/Attribution";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Wrapper>
        <Card />
        <Attribution />
      </Wrapper>
    </div>
  );
}

export default App;
