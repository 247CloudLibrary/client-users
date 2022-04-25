import { useNavigate } from "react-router-dom";
import { useScroll } from "./useScroll";

import Header from "./home/Header";
import Quote from "./home/Quote";
import SearchBar from "./home/SearchBar";
import Navigations from "./home/Navigations";
import Feature from "./home/Feature";
import FeatureDescriptions from "./home/FeatureDescriptions";
import Footer from "./home/Footer";

const HomePage = () => {
  const navigate = useNavigate();
  const scroll = useScroll();
  console.log(scroll);

  const onSearch = (event) => {
    event.preventDefault();
    navigate("/composite-list");
  };

  return (
    <div id="home">
      <Header />
      <main>
        <Quote />
        <SearchBar />
        <Feature />
        <Navigations />
        <FeatureDescriptions scroll={scroll} />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
