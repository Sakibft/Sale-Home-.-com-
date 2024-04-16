import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { BiPhoneCall } from "react-icons/bi";
 "react-icons/fa6";
import { GiRapidshareArrow } from "react-icons/gi";
import { IoHome } from "react-icons/io5";
import { LuDot } from "react-icons/lu";
import { MdLocationPin } from "react-icons/md";
import { useParams, useLoaderData } from "react-router-dom";
import ig from '../../assets/alskd.png'

const Viewproperty = () => {
  const [data, setData] = useState();
  // id, estate_title,image_url,segment_name,description,price,Status,Area,location,facilities
  console.log(data);
  const { id } = useParams();
  const homeData = useLoaderData();
  useEffect(() => {
    const SindleData = homeData.find((item) => {
      return item.id == id;
    });
    setData(SindleData);
  }, []);

  return (
 <div>
      <Helmet>
        <title>sale home ~ details</title>
      </Helmet>
      <div className="container mx-auto">
     <h1 data-aos="fade-down" data-aos-duration="1000" className="text-center font-bold text-3xl mt-2 text-blue-400">Everything You Need to Know About Home !</h1>
      </div>
     <div  data-aos="fade-up" data-aos-duration="1000" className="container mx-auto flex justify-center items-center mb-28 mt-8 ">
  
      
      <div className="card lg:card-side bg-base-100 shadow-xl md:w-full w-full  border-2  hover:border-[#8EA7FF] duration-1000">
        <figure data-aos="fade-right"  data-aos-delay="100"
    data-aos-duration="1000">
          <img
            className="w-full h-[500px] rounded-xl"
            src={data?.image_url}
            alt="Album"
          />
        </figure>
        <div className="card-body" data-aos="fade-left"  data-aos-delay="100"
    data-aos-duration="1000">
          <div className="flex gap-3">
            <IoHome className="text-3xl text-blue-400" />

            <h2 className="card-title text-xl">{data?.estate_title}</h2>
          </div>
          <h1 className="flex gap-2">
            <span className="font-semibold"> Location</span> : {data?.location} 
            <MdLocationPin className="text-xl text-blue-400" />
          </h1>
          <h1 className="flex gap-2">
            <span className="font-semibold"> Segment :</span> {data?.segment_name} 
            
          </h1>
          <p className="flex gap-2">
            <span className="font-semibold">Area :</span> {data?.Area}
            <GiRapidshareArrow className="mt-1 text-blue-500" />
          </p>
          <p className="font-semibold ">
            Price :<span className="text-blue-400"> {data?.price}</span>
          </p>
     
       
          <p className="font-semibold ">
            For :<span className="text-blue-400"> {data?.Status}</span>
          </p>

          <ul>
            <li className="font-semibold"> Facilities</li>
            <li className="flex ">
              <LuDot className="mt-1 text-xl" />
              {data?.facilities?.[0]}
            </li>
            <li className="flex ">
              <LuDot className="mt-1 text-xl" />
              {data?.facilities?.[1]}
            </li>
            <li className="flex ">
              <LuDot className="mt-1 text-xl" />
              {data?.facilities?.[2]}
            </li>
            <li className="flex ">
              <LuDot className="mt-1 text-xl" />
              {data?.facilities?.[3]}
            </li>
          </ul>
          <hr />
     
       
          <hr />
          <h1 className="font-semibold">More details about this property :</h1>
          <p className="mt-[-4px]">{data?.description}</p>
          <div className="card-actions justify-end">
            <button className="btn text-white bg-[#8EA7FF] border-[#8EA7FF]">
              Contact Now 
              <BiPhoneCall className="font-bold text-xl" />

            </button>
          </div>
        </div>
      </div>

 
    </div>
 </div>
  );
};

export default Viewproperty;
