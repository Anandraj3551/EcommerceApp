import Banner from "../components/Banner";
import BannerThree from "../components/BannerThree";
import BannerTwo from "../components/BannerTwo";
import Beauty from "../components/Beauty";
import CardSlider from "../components/CardSlider";
import Category from "../components/Category";
import Flower from "../components/Flower";
import Hero from "../components/hero";
import HotDeals from "../components/HotDeals";
import LatestCollection from "../components/LatestCollection";
import MainCategories from "../components/MainCategories";
import MensWare from "../components/MensWare";
import OfferBanner from "../components/OfferBanner";
import OurPolicy from "../components/OurPolicy";
import RecentView from "../components/RecentView";
import TopDeals from "../components/TopDeals";
import WomensWare from "../components/WomensWare";

const Home = () => {
  return (
    <div>
      <Category></Category>
      <Banner></Banner>
      <Hero></Hero>
      <CardSlider></CardSlider>
      <OfferBanner></OfferBanner>
      <MainCategories></MainCategories>
      <BannerTwo></BannerTwo>
      <LatestCollection></LatestCollection>
      <BannerTwo></BannerTwo>
      <MensWare></MensWare>
      <Flower></Flower>
      <BannerThree></BannerThree>
      <WomensWare></WomensWare>
      <Beauty></Beauty>
      <BannerThree></BannerThree>
      <TopDeals></TopDeals>
      <BannerTwo></BannerTwo>
      <HotDeals></HotDeals>
      <OfferBanner></OfferBanner>
      <RecentView></RecentView>
      <OurPolicy></OurPolicy>
    </div>
  );
};

export default Home;
