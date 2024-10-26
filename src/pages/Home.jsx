import BestAgents from "../components/BestAgents";
import BestHouse from "../components/BestHouse";
import FindBestPlace from "../components/FindBestPlace";
import Properties4Sale from "../components/Properties4Sale";
import SearchForm from "../components/SearchForm";
import Slider from "../components/Slider";

const Home = () => {
  const images = [
    'images/slider/image-1.jpg',
    'images/slider/image-2.jpg',
    'images/slider/image-3.jpg',
    'images/slider/image-4.jpg',
    'images/slider/image-5.jpg',
    'images/slider/image-6.jpg',
  ];

  return (
    <div>
      <Slider images={images} />
      <SearchForm />
      <BestHouse />
      <Properties4Sale />
      <FindBestPlace />
      <BestAgents />
    </div>
  );
};

export default Home;