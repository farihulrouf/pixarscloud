import React from 'react'
import { price } from '../components/data/dataContent'
import CardProduct from '../components/CardProduct'
import BgPages from '../components/BgPages'
const Price = () => {
    const title = "Pricing to fit your needs."
    const desc = "Open 24/7, Pixarcloud offers flexe necessary amenities for a"
    //const price = price.slice(0, 3)
    //console.log(products)
    return (
        <React.Fragment>
            <div className="bg-[url('/img/bg_pages.svg')]">
            <div className="max-w-screen-xl mx-auto">
                    <div className="w-full p-4">
                        <div className="grid grid-cols-12 gap-x-4 sm:gap-y-16 gap-4 mt-28 mb-8">
                           {price.map((item, index) => ( 
                                <div key={index} className="lg:col-span-4 sm:col-span-6 col-span-12">
                                    <CardProduct  item={item} />
                                </div>
                            ))}
                         </div>
                    </div>
                    
                </div>
            </div>
        </React.Fragment>
    )
}

export default Price