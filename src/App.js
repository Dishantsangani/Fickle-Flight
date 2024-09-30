import "./App.css";
import Hotels from "./Pages/Hotels";
import Homepage from "./Pages/Homepage";
import Search from "./Pages/Search";
import Page404 from "./Pages/Page404";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Offers from "./Pages/Offers";
import Loginpage from "./Pages/Loginpage";
import Registor from "./Pages/Registor";
import Protected from "./Pages/Protected";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Updates from "./Components/Updates";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Protected Component={Homepage} />} />
        <Route path="/hotels" element={<Protected Component={Hotels} />} />
        <Route path="/search" element={<Protected Component={Search} />} />
        <Route path="/offers" element={<Protected Component={Offers} />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/registor" element={<Registor />} />
        <Route path="/*" element={<Page404 />} />
      </Routes>
      <Updates />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
