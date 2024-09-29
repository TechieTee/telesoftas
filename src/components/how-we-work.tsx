import { Image } from "../assets/index";
const HowWeWork = () => {
  return (

        <div className=" px-24 py-16 bg-[#F5F8FF] ">
            <div className="flex flex-col items-center justify-center lg:grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
                <div className="">
                  <h2 className="text-[#00012D] text-3xl  lg:text-5xl  font-bold leading-normal">
                    How we work
                  </h2>
                  <h4 className="text-[#595959] text-sm lg:text-[18px] font-normal mt-4 mb-8 leading-[30px] lg:w-4/5">
                    At TeleSoftas, we focus on empowering organisation and non-
                    technical founders to transform their innovative ideas into
                    reality by creating Minimum Viable Products (MVPs) that
                    effectively assess market potential. Our skilled team supports
                    you throughout the entire journey, from validating your initial
                    concept to the lifetime of your product.
                  </h4>
                  <ul className="list-disc mt-4 pl-8">
                    <li className="text-[#595959] text-sm lg:text-[18px] font-normal  mb-2 leading-loose lg:w-4/5"><span className="font-bold text-black">FREE</span> idea valuation consultation.</li>
                    <li className="text-[#595959] text-sm lg:text-[18px] font-normal mb-2 leading-loose lg:w-4/5">Product Strategy & Discovery</li>
                    <li className="text-[#595959] text-sm lg:text-[18px] font-normal  mb-2 leading-loose lg:w-4/5">Product Design & Delivery</li>
                    <li className="text-[#595959] text-sm lg:text-[18px] font-normal  mb-2 leading-loose lg:w-4/5">Engineering Consulting & Staffing</li>  </ul>
                </div>
              <div className=" ">
              <img src={Image.work}  alt="logo" className="w-full h-[400px] object-cover rounded-[30px]"/> 
              </div>
            </div>
          </div>
  );
};

export default HowWeWork;
