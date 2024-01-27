import "./App.css";
import Home from "./pages/home/home";
import Components from "./shared/components/index";

function App() {
  return (
    <>
      <Components.Navbar />
      <Home />
      <Components.Footer />
    </>
  );
}

export default App;
