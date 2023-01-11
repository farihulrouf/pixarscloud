import { contentSThree, contentSthreeImage } from '../data/dataContent'
import ImageCollect from './ImageCollect'
import Button from '../Button'
const SectionThree = () => {
    return (
        <div className="font-play">
             <div className="max-w-screen-xl mx-auto p-4">
                <div className="grid grid-cols-12">
                    <div className="md:col-span-6 col-span-12">
                        <div className="max-w-3xl">
                                <h5 className="text-teal-300 text-xl py-2">VISIONS</h5>
                                <h2 className="text-white lg:text-5xl text-4xl max-w-[546px] py-2 font-semibold">Why Choose us</h2>
                                <p className="text-white max-w-[616px] py-4 text-base">
                                We Are A Leading Cloud Providing All Services At One Place With Premium Quality & Quantity At The Same Place With Frequent Restocks And 24/7 Customer Support. Start Using Our Service Today Starting At Just 19.99$/Week
                                </p>
                        </div>
                        <div className="max-w-3xl py-4">
                                <div className="grid grid-rows-2 grid-flow-col gap-4">
                                    {contentSThree.map((item, index) => (
                                        <div key={index} className="flex-auto max-w-[270px]">
                                            <div className="flex space-x-2 items-center py-2">
                                                <img className="w-6 h-auto" src={item.icon} alt="pic" />
                                                <p className="text-white">{item.title}</p>
                                            </div>
                                            <p className="text-white pl-8">{item.desc}</p>
                                        </div>
                                    ))}
                                    
                                </div>
                        </div>

                        <div className="py-6 space-x-2">
                            <Button>explore more</Button>
                        </div>
                    </div>
                    <div className="md:col-span-6 col-span-12">
                        <ImageCollect />
                    </div>
                </div>
             </div>
        </div>
    )
}
export default SectionThree