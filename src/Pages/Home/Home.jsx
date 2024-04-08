import { Helmet } from "react-helmet-async";
import Banner from "../../components/Banner";

 

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>sale home ~ home</title>
      </Helmet>
   <Banner></Banner>
     
    </div>
  );
};

export default Home;