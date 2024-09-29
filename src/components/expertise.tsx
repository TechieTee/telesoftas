import { useState } from "react";
import { Image } from "../assets/index";
const Expertise = () => {
  const [videoError, setVideoError] = useState(false);

  const handleError = () => {
    setVideoError(true);
  };

  return (
    <div className="lg:px-36 lg:py-16 md:px-24 md:py-16 px-[10px] py-[20px] flex flex-col gap-2 bg-[#15161E]" >
          <h2 className="text-[#FFFFFF] text-[42px] text-center font-semibold leading-normal">
            Our Expertise
          </h2>
          <h4 className="text-[#FFFFFF] text-md text-center font-normal m-auto my-3 lg:w-[70%]  leading-loose">
            We deliver a wide range of services customized to meet the specific needs of non-tech founders<br/>
            and organizations. Our expertise encompasses:
          </h4>

    <div className="lg:w-[50%] mx-auto">
   
      {videoError ? (
        <img 
          src={Image.expertise} 
          alt="Fallback image" 
          width="560" 
          height="315"
        />
      ) : (
     
        <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/5r_7VYk-VGM"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        onError={handleError} 
      ></iframe>
      )}
    </div>
       
    </div>
  );
};
export default Expertise;