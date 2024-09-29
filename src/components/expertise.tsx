import { Image } from "../assets/index";
const Expertise = () => {
  return (
    <div className="px-24 py-10 flex flex-col gap-2 bg-[#15161E]" >
          <h2 className="text-[#FFFFFF] text-[42px] text-center font-semibold leading-normal">
            Our Expertise
          </h2>
          <h4 className="text-[#FFFFFF] text-md text-center font-normal m-auto my-3 lg:w-[70%]  leading-loose">
            We deliver a wide range of services customized to meet the specific needs of non-tech founders<br/>
            and organizations. Our expertise encompasses:
          </h4>
          <div className="lg:w-[50%] mx-auto">
          <img src={Image.expertise}  alt="logo" className="w-full h-[400px] object-cover"/> 
        </div>
    </div>
  );
};
export default Expertise;