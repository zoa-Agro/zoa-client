import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import Hero from "../Banner/Hero";
import Categories from "../Categories/Categories";
import Features from "../Features/Features";
import NewArrivals from "../NewArrivals/NewArrivals";
import PromoBanner from "../PromoBanner/PromoBanner";

const Home = () => {
  return (
    <div className="">
      <Helmet>
        <title>Home | Green Agro </title>
      </Helmet>
      <Banner />
      <Hero />
      <Features />
      <Categories />
      <PromoBanner />
      <NewArrivals />s
    </div>
  );
};

export default Home;
