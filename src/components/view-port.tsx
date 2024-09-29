import { Image } from "../assets/index";
const ViewPort = () => {
  return (
    <div className="lg:px-24 lg:py-16 md:px-24 md:py-16 px-[10px] py-[10px] mt-[100px]  lg:mt-[60px] grid bg-[#FFFFFF] w-full lg:text-left md:text-center text-center" >
      <div className=" mx-auto grid xl:grid-cols-2 grid-cols-1 gap-8" >
        <div className=" col-span-1 ">
       
            <h2 className="text-[#000000] text-[30px] xl:text-[45px] font-bold lg:leading-[60px] leading-tight">
              We Support Non-Tech<br/>
              Founders in Building and
              Scaling Tech-Driven
              Companies.
            </h2>
            <h4 className="text-[#595959] lg:text-left text-center text-[15px] font-normal  mt-4 mb-8 md:mb-12 leading-loose lg:pr-12 mx-auto lg:mx-0">
              TeleSoftas Nigeria is a premier software development outsourcing provider
              catering to non-tech founders, proudly part of the Helmes corporate group—
             one of the largest software development firms in Northern Europe. Based in
              Tallinn, we specialise in offering a comprehensive tech back office for non-
              tech founders and organisations, enabling them to navigate the
              complexities of software development with ease.
              </h4>
            <div className="lg:flex lg:justify-start md:justify-center  flex-row gap-2 justify-center w-full">
              <div className="mb-2">
                <button className="text-[14px] py-3 lg:px-6 w-full bg-black text-white border" >
                  Book a Consultation
                </button>
              </div>
              <div className="mb-2">
                <button className="text-[14px] py-3 lg:px-6 w-full border border-black" >
                  Read More
                </button>
              </div>
            </div>
         
        </div>

        <div className="col-span-1 hidden xl:flex">
        <img src={Image.hero} alt="logo"  className=''/> 

        </div>
      </div>
    </div>
  );
};
export default ViewPort;