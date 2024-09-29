import { Image } from "../assets/index";
const HowWeWork = () => {
  return (

        <div className="lg:px-36 lg:py-16 md:px-24 md:py-16 px-[20px] py-[20px] bg-[#F5F8FF] w-full">
            <div className="flex flex-col items-center justify-center lg:grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-full">
                <div className="">
                  <h2 className="text-[#00012D] text-4xl lg:text-left text-center  lg:text-5xl  font-bold leading-normal">
                    How we work
                  </h2>
                  <h4 className="text-[#595959] text-[18px] lg:text-left text-center lg:text-[18px] font-normal mt-4 mb-8 leading-[30px] lg:w-4/5 w-full">
                    At TeleSoftas, we focus on empowering organisation and non-
                    technical founders to transform their innovative ideas into
                    reality by creating Minimum Viable Products (MVPs) that
                    effectively assess market potential. Our skilled team supports
                    you throughout the entire journey, from validating your initial
                    concept to the lifetime of your product.
                  </h4>
                  <ul className="list-disc mt-4 pl-8 lg:mb-0 md:mb-0 mb-8">
                    <li className="text-[#595959] text-[18px] lg:text-[18px] font-normal  mb-2 leading-loose lg:w-4/5"><span className="font-bold text-black">FREE</span> idea valuation consultation.</li>
                    <li className="text-[#595959] text-[18px] lg:text-[18px] font-normal mb-2 leading-loose lg:w-4/5">Product Strategy & Discovery</li>
                    <li className="text-[#595959] text-[18px] lg:text-[18px] font-normal  mb-2 leading-loose lg:w-4/5">Product Design & Delivery</li>
                    <li className="text-[#595959] text-[18px] lg:text-[18px] font-normal  mb-2 leading-loose lg:w-4/5">Engineering Consulting & Staffing</li>  </ul>
                </div>
              <div className="sm:px-[20px] ">
              <img src={Image.work}  alt="logo" className="w-full h-[400px] object-cover rounded-[30px]"/> 
              </div>
            </div>
          </div>
  );
};

export default HowWeWork;
