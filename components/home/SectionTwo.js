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
                                <h2 className="text-white lg:text-5xl text-4xl max-w-[500px] font-semibold py-2">Develop and improve your inner energy</h2>
                                <p className="text-white max-w-[616px] py-4 text-lg">Cosmohub is a coworking space in Sarajevo, Bosnia Herzegovina, with an open and creative community of freelancers, remote workers and startups, which provides you with the ideal environment for your business growth. Here, you can work, exchange ideas, share experiences and create a strong network of support in order to improve your business, with other likeminded people who share your passion for entrepreneurship and startups. 
                                </p>
                         </div>

                         <div className="py-4 flex items-center space-x-2 lg:pl-1 sm:pl-6 pl-0">
                            <Button>view avaibility</Button>
                            <button className="px-6 py-3 2xl:py-4 sm:text-base text-sm text-white font-semibold inline-flex space-x-2 items-center border-[1px] rounded-3xl"><img className="w-6 p-1 h-auto" src="/img/play.svg" />3D tour space</button>
                         </div>
                        
                    </div>
                 </div>
             </div>
        </div>
    )
}
export default SectionTwo