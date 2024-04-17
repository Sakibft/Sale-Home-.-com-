import { IoMdArrowDown } from "react-icons/io";

import kse from "../assets/undraw_for_sale_re_egkk (1).svg";
import oidk from "../assets/undraw_order_a_car_-3-tww.svg";
import ikd from "../assets/lsdk.png";
import uid from "../assets/oiefrnj.svg";
const Hcard = () => {
  return (
    <div>
      <h1 className="flex gap-2 justify-center text-[#8EA7FF] text-xl mb-3">
        {" "}
        <IoMdArrowDown className="mt-[6px]" /> More recommended homes
      </h1>
      <div>
        <div>
          <div className="grid lg:grid-cols-2 gap-1 container mx-auto mb-6">
            {/* 1 */}
            <div  
            data-aos="fade-down" 
            data-aos-delay="100"
            data-aos-duration="1000"
            className="card lg:card-side md:card-side bg-base-100 shadow-xl   border-2 ">
              <figure>
                <img className="w-96" src={ikd} alt="Album" />
              </figure>
              <div className="card-body">
                <h2 className="card-title flex justify-center">Browse homes</h2>
                <p className="text-center">
                  Find your place with an immersive <br /> photo experience and
                  the most <br /> listings, including things you won’t <br />{" "}
                  find anywhere else.
                </p>
                <div className="card-actions justify-center">
                  <button className="btn  border border-[#8EA7FF] hover:bg-[#8EA7FF] hover:text-white w-40 bg-white text-[#8EA7FF]">
                    Browse homes
                  </button>
                </div>
              </div>
            </div>
            {/* 2 */}
            <div
              data-aos="fade-down" 
              data-aos-delay="100"
              data-aos-duration="1000"
            className="card lg:card-side md:card-side bg-base-100 shadow-xl   border-2  ">
              <figure>
                <img className="w-60 pl-4" src={oidk} alt="Album" />
              </figure>
              <div className="card-body">
                <h2 className="card-title flex justify-center">Rent a home</h2>
                <p className="text-center">
                  We’re creating a seamless online <br /> experience – from
                  shopping <br /> on the largest rental network, to <br />{" "}
                  applying, to paying rent.
                </p>
                <div className="card-actions justify-center">
                  <button className="btn  border border-[#8EA7FF] hover:bg-[#8EA7FF] hover:text-white w-40 bg-white text-[#8EA7FF]">
                    Find rentals
                  </button>
                </div>
              </div>
            </div>
            {/* 3 */}
            <div
              data-aos="fade-right" 
              data-aos-delay="300"
              data-aos-duration="1000"
            className="card lg:card-side md:card-side bg-base-100 shadow-xl   border-2  ">
              <figure>
                <img className="w-" src={kse} alt="Album" />
              </figure>
              <div className="card-body">
                <h2 className="card-title flex justify-center">Sell a home</h2>
                <p className="text-center">
                  {" "}
                  No matter what path you take <br /> to sell your home, we can
                  help you navigate <br /> a successful sale.
                </p>
                <div className="card-actions justify-center">
                  <button className="btn  border border-[#8EA7FF] hover:bg-[#8EA7FF] hover:text-white w-40 bg-white text-[#8EA7FF]">
                    See your options
                  </button>
                </div>
              </div>
            </div>
            {/* 4 */}
            <div 
             data-aos="fade-left" 
             data-aos-delay="300"
             data-aos-duration="1000"
            className="card lg:card-side md:card-side bg-base-100 shadow-xl   border-2  ">
              <figure>
                <img className="w-60" src={uid} alt="Album" />
              </figure>
              <div className="card-body">
                <h2 className="card-title flex justify-center">Buy a home</h2>
                <p className="text-center">
                  {" "}
                  Recommendations are based on your <br />
                  location and search activity, such as the homes <br /> you have
                  viewed and saved 
                </p>
                <div className="card-actions justify-center">
                  <button className="btn  border border-[#8EA7FF] hover:bg-[#8EA7FF] hover:text-white w-40 bg-white text-[#8EA7FF]">
                    Buy a home
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="border border-[#8EA7FF]"></div> */}
    </div>
  );
};

export default Hcard;
