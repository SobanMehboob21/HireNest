
import Header from "../components/Header";
import { Jobs } from "./Jobs";
import { Category } from "./Category";
import { Details } from "./Details";
import Testimonial from "./Testimonial";
import { News } from "./News";


const Home = () => {
  return (
    <>
    
      <Header />
      <Jobs />
      <Category />
      <Details />
      <Testimonial />
      <News />
          </>
  );
};

export default Home;
