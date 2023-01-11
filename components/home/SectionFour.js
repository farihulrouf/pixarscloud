import SliderImage from "./SliderImage"
import Button from '../Button'
const SectionFour = () => {
    return (
        <div className="font-palo">
             <div className="max-w-screen-xl mx-auto sm:pl-0 pl-4 pb-4 pt-4 relative">
                <div className="absolute sm:top-4 top-[20px] sm:left-[480px] right-0 ">
                    <img className="sm:w-96 w-28" src="/img/bg_section4.svg" />
                </div>
                <img className="absolute sm:top-[55px] top-[10px] sm:left-[475px] right-[80px] w-12 h-auto" src="/img/rocket.svg" alt="pic" />
                 <div className="grid grid-cols-12 sm:pt-16 pt-4">
                     <div className="md:col-span-6 col-span-12">
                            <div className="max-w-3xl sm:pl-8 pl-0 lg:mt-24 mt-2">
                                <h5 className="text-teal-300 text-xl py-2">SOLUTIONS</h5>
                                <h2 className="text-white sm:text-5xl text-4xl max-w-[546px] py-2 font-semibold">Space to bare your thoughts comfortably</h2>  
                                <p className="text-white max-w-[550px] py-4 text-lg">
                                Open 24/7, Cosmohub offers flexible working space and fully equipped offices with all the necessary amenities for a comfortable and productive work. We give our members access to high-speed internet, a fully equipped kitchen, a business essentials, meeting rooms, conference rooms and business registration options with legal and tax advice.
                                </p> 
                            </div>
                            <div className="py-4 sm:pl-8 pl-0">
                                <Button>Apply for membership</Button>
                             </div>
                     </div>  
                     <div className="md:col-span-6 col-span-12">
                             <SliderImage />
                     </div>     
                 </div>
              
             </div>
        </div>
    )
}
export default SectionFour