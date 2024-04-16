import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
{
  /* <div class="card-container">
  <div class="card overflow-hidden border border-gray-200 rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
    <img src="card-image.jpg" alt="Card Image" class="w-full">
    <div class="card-content p-4">
      <h2 class="card-title text-xl font-bold mb-2">Card Title</h2>
      <p class="card-text text-gray-700">Card Description</p>
      <button class="card-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
        Button
      </button>
    </div>
  </div>
</div> */
}

const SingleCard = ({ item }) => {
  const {
    id,
    estate_title,
    image_url,
    segment_name,
    description,
    price,
    Status,
    Area,
    location,
    facilities,
  } = item;
  return (
    <div className="container mx-auto ">
      <div>
        <div className="card lg:w-full h-[500px] bg-base-100 shadow-xl transition duration-300 transform hover:scale-105 border-2 hover:border-[#8EA7FF]">
          <figure>
            <img src={image_url} alt="Shoes" />
          </figure>
          <div className="p-4">
            <h2 className="card-title text-blue-500 mb-2">{price}</h2>
            <h2 className="card-title">{estate_title}</h2>
            <p className="mt-2">
              {description.length > 200 ? (
                <p>{description.slice(0, 100)}</p>
              ) : (
                <p>{description}</p>
              )}
            </p>
            <p className="font-semibold mt-1">
              Segment :<span className=" text-sm"> {segment_name}</span>
            </p>
            <p className="font-semibold mt-1">
              For :<span className="text-blue-400"> {Status}</span>
            </p>

            <div className="card-actions justify-end">
              <Link to={`/item/${id}`}>
                <button className="btn bg-white hover:text-white hover:bg-[#8EA7FF] text-[#8EA7FF] border-[#8EA7FF]">
                  View Property <FaArrowRightLong />
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
