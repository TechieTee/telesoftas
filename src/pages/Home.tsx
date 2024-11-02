import Contact from "../components/contact";

import Footer from "../components/footer";
import Header from "../components/header";
import HowWeWork from "../components/how-we-work";
import Stacks from "../components/stacks";
import SubViewPort from "../components/sub-view-port";
import Technologies from "../components/technologies";
import ViewPort from "../components/view-port";
import WhyUs from "../components/why-us";



const Home = () => {
  return (
    <>
      
 <Header />
 <ViewPort/>
 <SubViewPort/>
 <WhyUs/>
 
 <HowWeWork />


 <Stacks/> 
  <Technologies />
 <WhyUs/>

 <Contact /> 
 
  <Footer/> 

 


</>
  );
};
export default Home;
