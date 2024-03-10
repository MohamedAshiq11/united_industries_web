import Home from "./pages/home/home";
import Service from "./pages/service/service";
import AboutUs from "./pages/about_us/about_us";
import Components from "./shared/components/index";
import ContactUs from "./pages/contact_us/contact_us";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Components.Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <Components.Footer />
      </div>
    </Router>
  );
}

export default App;
