import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../src/components/Header";
import Succes from "./components/Succes";
import TOTC from "./components/TOTC";
import LatestNewes from "./components/LatestNewes";
import Footer from "./components/Footer";
import Featuers from "./components/Featuers";
function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Header />/
      <Succes />
      <TOTC />
      <Featuers></Featuers>
      <LatestNewes />
      <Footer />
    </>
  );
}

export default App;
