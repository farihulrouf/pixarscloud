
import Button from '../Button'
const SectionSeven = () => {
    return (
        <div className="font-palo">
             <div className="max-w-screen-xl mx-auto mt-16 mb-16 relative">
                 <img className="w-36 absolute top-0 -left-24 -top-4" src="/img/bg_section_seven.svg" /> 
                 <div className="grid grid-cols-12 gap-x-6 gap-y-4 p-4">
                    <div className="md:col-span-6 col-span-12 z-30">
                         <h5 className="text-teal-300 text-xl py-2">BECOME A MEMBER</h5>
                         <h2 className="text-white text-4xl md:text-5xl py-2 font-semibold">Ready to Join With us</h2> 
                         <p className="text-white max-w-lg py-8 text-base">Simply Click The Button Below & Start Your Beautiful Journey Starting At Just 19.99$/Week Included With Combos , Proxies , AIO , Configs And Much More..</p>
                         <div className="py-4 space-x-2">
                            <Button>Sign Up Now</Button>
                            <button className="px-6 py-3 2xl:py-4 sm:text-base text-sm text-yellow-500 border-[1px] border-yellow-500 rounded-3xl">Join Discord</button>
                        </div>
                    </div>
                    <div className="md:col-span-6 col-span-12">
                        <div className="md:max-w-[440px] mt-6 w-full rounded-t-full relative">
                                 <div className="absolute -left-1 md:-top-6 -top-2">
                                     <img className="w-full h-[450px]" src="/img/line1.svg" alt="pic" />
                                  </div>
                                  <div className="relative z-20">
                                    <img className="w-full z-20 p-1 h-auto rounded-t-full" src="/img/image_53.png" alt="pic" />
                                 </div>
                                
                        </div>
                    </div>
                 </div>
                
             </div>
        </div>
    )
}
export default SectionSeven