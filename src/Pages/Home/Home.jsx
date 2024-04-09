import { Helmet } from "react-helmet-async";
import Banner from "../../components/Banner";
import { useLoaderData } from "react-router-dom";
import SingleCard from "../../components/SingleCard";

const Home = () => {
  const homeData = useLoaderData();
  console.log(homeData);
  return (
    <div>
      <Helmet>
        <title>sale home ~ home</title>
      </Helmet>
      <Banner></Banner>
      <div className="container mx-auto flex justify-center mt-6">
        <h1> Discover a place
you will love to live</h1>
      </div>
    <div className="container mx-auto mt-4 grid lg:grid-cols-4 md:grid-cols-2  gap-4 mb-12 p-1">
        {homeData.map((item) => (
          <SingleCard key={item.id} item={item}></SingleCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
