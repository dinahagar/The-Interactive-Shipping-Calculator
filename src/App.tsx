import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Pages/Home/home";
import Header from "./Components/Header/header";
import Steps from "./Pages/Steps/steps";
import { PackageProvider } from "./Context/packageDimContext";
import { OriginProvider } from "./Context/originContext";
import { DestinationProvider } from "./Context/destinationContext";
import { CourierProvider } from "./Context/courierContext";
import Checkout from "./Pages/Checkout/checkout";
import Lastpage from "./Pages/LastPage/lastpage";

function App() {
  return (
    <>
      <OriginProvider>
        <DestinationProvider>
          <PackageProvider>
            <CourierProvider>
              <Router>
                <Header />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/steps" element={<Steps />} />
                  <Route path="/checkout" element={<Checkout />} />
                  <Route path="/lastpage" element={<Lastpage />} />
                </Routes>
              </Router>
            </CourierProvider>
          </PackageProvider>
        </DestinationProvider>
      </OriginProvider>
    </>
  );
}

export default App;
