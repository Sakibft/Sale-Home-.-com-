
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";


const SingleCard = ({item}) => {
  const {id, estate_title,image_url,segment_name,description,price,Status,Area,location,facilities}=item;
  return (
    <div className="container mx-auto ">
     
      <div>
      <div className="card lg:w-full h-[500px] bg-base-100 shadow-xl">
  <figure><img src={image_url} alt="Shoes" /></figure>
  <div className="p-4">
    <h2 className="card-title text-blue-500 mb-2">{price}</h2>
    <h2 className="card-title">{estate_title}</h2>
    <p className="mt-2">
    {
       description.length>200 ? <p>{description.slice(0,100)}</p>:
        <p>{description}</p>
    
      }
    </p>
    <p className="mt-1 text-blue-400">
      Segment : 
      { segment_name}
    </p>
    <p className="mt-1 text-blue-400">
      Segment : 
      {Status}
    </p>


    <div className="card-actions justify-end">
   <Link to={`/item/${id}`}>
   <button className="btn bg-white hover:text-white hover:bg-[#8EA7FF] text-[#8EA7FF] border-[#8EA7FF]">View Property <FaArrowRightLong />
</button>
   </Link>
    </div>
  </div>
</div>
      </div>
    </div>
  );
};

export default SingleCard;