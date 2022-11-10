import logo from "./logo.svg";
import "./App.css";
import { MainRoutes } from "./components/Routes/MainRoutes";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainRoutes />
    </div>
  );
}

export default App;
