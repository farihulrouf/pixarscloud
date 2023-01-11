import React from 'react'
import { contentSthreeImage } from '../data/dataContent'
const ImageCollect = () => {
     
     return (
        
        <div className="w-full">
    
                <div className="grid grid-rows-2 grid-flow-col gap-4">
                    {contentSthreeImage.map((item, index) =>
                        <div key={index} className="max-w-[299px]">
                            <img className="w-full" src={item.img} alt="pic" />
                        </div>
                    )}
                </div>
            

          
        </div>            
    )
}
export default ImageCollect

