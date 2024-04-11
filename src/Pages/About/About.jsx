import { Helmet } from "react-helmet-async";
import img from "../../assets/about.png";

const About = () => {
  return (
    <div className="container mx-auto mb-4">
      <Helmet>
        <title>sale home | about</title>
      </Helmet>

      <div className=" grid md:grid-cols-4">
        <div className="col-span-2 md:mt-10">
          <img  src={img} alt="" />
        </div>
        <div className="col-span-2">
          <h1
            className=" text-3xl font-semibold
      
        text-blue-400
        animate__animated
        animate__bounceInDown
        "
       
          >
            Welcome to you Home~Sale
          </h1>
          <h1 className="mt-2 font-semibold text-xl ">Our Mission</h1>
          <p className="mt-4 ">
            At Home~sale, our mission is simple: to provide exceptional service
            and deliver outstanding results for every client, every time. We
            understand that buying or selling a home is one of the most
            significant decisions you will ever make, and we are committed to
            guiding you through the process with expertise, integrity, and
            personalized attention.
          </p>
          <h1 className="text-xl font-semibold mt-3 mb-1">Values</h1>
          <p>
            <span className="font-semibold">Excellence</span>: We strive for
            excellence in everything we do, from our customer service to our
            marketing strategies to our negotiation skills. Our goal is to
            exceed your expectations and achieve the best possible outcome for
            you.
          </p>

          <p className="mt-1">
            {" "}
            <span className="font-semibold ">Integrity</span> We believe in
            honesty, transparency, and ethical conduct at all times. You can
            trust us to always act in your best interests and uphold the highest
            standards of professionalism.
          </p>
          <p className="mt-1">
            {" "}
            <span className="font-semibold ">Community:</span> We are proud to
            be a part of the communities we serve, and we are committed to
            giving back whenever we can. Whether it is through volunteer work,
            charitable donations, or supporting local businesses, we believe in
            making a positive impact wherever we go.
          </p>

          <h1 className="mt-4 font-semibold text-xl ">Our Team</h1>
          <p className=" ">
            At Sale~Home, we have assembled a team of highly skilled and
            knowledgeable professionals who are passionate about real estate.
            From our experienced agents to our dedicated support staff, everyone
            on our team shares a commitment to excellence and a dedication to
            serving our client is not needs.
          </p>
          <h1 className="mt-4 font-semibold text-xl ">Our Services</h1>
          <p className=" ">
            Whether you are buying, selling, or investing in real estate, we
            offer a comprehensive range of services to help you achieve your
            goals. From market analysis and property valuation to marketing
            strategies and negotiation tactics, we have the expertise and
            resources to guide you through every step of the process.
          </p>
          <h1 className="mt-4 font-semibold text-xl ">Get in Touch</h1>
          <p className=" ">
            Ready to get started? Contact us today to learn more about how we
            can help you with all of your real estate needs. We look forward to
            the opportunity to work with you and exceed your expectations. Thank
            you for choosing Sale~Home!
          </p>
        </div>
      </div>
     
    </div>
  );
};

export default About;
