import { Helmet } from "react-helmet-async";
import Banner from "../../components/Banner";
import { useLoaderData } from "react-router-dom";
import SingleCard from "../../components/SingleCard";
import Hcard from "../../components/Hcard";

const Home = () => {
  const homeData = useLoaderData();
  console.log(homeData);
  return (
    <div className="mt-22">
      <Helmet>
        <title>Sale ~ Home</title>
      </Helmet>
      {/* banner */}
      <Banner></Banner>
      <div className="container mx-auto flex justify-center mt-12">
        <div>
          <h1></h1>
          <h1
            className="text-2xl text-center font-bold animate__animated animate__pulse"
            style={{ animationDelay: "1s" }}
          >
            Discover a place you will love to live !
          </h1>

          <p className="text-center">
            Escape to a serene haven, where natures embrace and cozy comforts
            intertwine, <br /> offering a perfect sanctuary for your cherished
            moments.
          </p>
        </div>
      </div>
      {/* card */}
      <div className="container mx-auto mt-4 grid lg:grid-cols-4 md:grid-cols-2  gap-4 mb-8 p-1">
        {homeData.map((item) => (
          <SingleCard key={item.id} item={item}></SingleCard>
        ))}
      </div>
      {/* extra */}
      <Hcard></Hcard>

    </div>
  );
};

export default Home;
