import Button from '../Button'
import SliderImageSectwo from "./SliderImageSectwo"
const SectionTwo = () => {
  
    return (
        <div className="font-palo">
             <div className="max-w-screen-xl mx-auto p-4">
                 <div className="grid grid-cols-12 pb-6">
                     <div className="md:col-span-6 col-span-12 pt-6">
                        <SliderImageSectwo />
                    </div>
                    <div className="md:col-span-6 col-span-12">
                        <div className="max-w-3xl lg:pt-40 pt-16 lg:pl-1 sm:pl-6 pl-0">
                                <h5 className="text-teal-300 text-xl font-semibold py-2">SERVICES</h5>
                                <h2 className="text-white lg:text-5xl text-4xl max-w-[500px] font-semibold py-2">Premium Quality Databases</h2>
                                <p className="text-white max-w-[616px] py-4 text-lg">Get Preium Quality Combolists , Proxies , Configs , AIO All At One Place. No Need To Pay For Everything Seperately When You Can Get All That Here At One Price. 
                                </p>
                         </div>

                         <div className="py-4 flex items-center space-x-2 lg:pl-1 sm:pl-6 pl-0">
                            <Button>Buy Now</Button>
                            <button className="px-6 py-3 2xl:py-4 sm:text-base text-sm text-white font-semibold inline-flex space-x-2 items-center border-[1px] rounded-3xl"><img className="w-6 p-1 h-auto" src="/img/play.svg" />Join Discord</button>
                         </div>
                        
                    </div>
                 </div>
             </div>
        </div>
    )
}
export default SectionTwo