import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaAngleDown } from "react-icons/fa6";
import { GiRapidshareArrow } from "react-icons/gi";
import { IoHome } from "react-icons/io5";
import { MdLocationPin } from "react-icons/md";
import { useParams, useLoaderData } from "react-router-dom";

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
    <div className="container mx-auto">
      <Helmet>
        <title>sale home ~ details</title>
      </Helmet>
      <div className="mt-6 flex justify-center items-center">
        <div className="card card-compact w-[800px]  bg-base-100 shadow-xl">
          <figure>
            <img src={data?.image_url} />
          </figure>
          <div className="card-body">
            <div className="flex gap-3">
              <IoHome className="text-3xl" />

              <h2 className="card-title">{data?.estate_title}</h2>
            </div>
            <div className="border"></div>
            <h2>
              For: <span className="text-green-500">{data?.Status}</span>{" "}
            </h2>

            <h2 className="card-title">{data?.price}</h2>
            <p className="flex gap-2">
              Area ~ 
              {data?.Area}
              <GiRapidshareArrow className="mt-1 text-blue-500" />
            </p>
            <p className="w-16">
              Facilities <FaAngleDown className="mt-1" />
            </p>
            <ul>
              <li>{data?.facilities?.[0]}</li>
              <li>{data?.facilities?.[1]}</li>
              <li>{data?.facilities?.[2]}</li>
              <li>{data?.facilities?.[3]}</li>
            </ul>
            <h1 className="flex gap-2">
              Location: {data?.location} <MdLocationPin className="text-xl" />
            </h1>
            <h1>Details about this property</h1>
            <p>{data?.description}</p>

         
          </div>
        </div>
      </div>
    </div>
  );
};

export default Viewproperty;
