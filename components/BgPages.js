import CardProduct from './CardProduct'
const BgPages = ({ title, desc}) => {
    //console.log(products)
    return (
        <div className="relative min-h-[800px] bg-cover bg-bottom bg-[url('/img/bg_pages.svg')]">
            
            <div className="max-w-screen-xl mx-auto pb-4 px-4 font-palo pt-60">
                <div className="w-full flex justify-center flex-col items-center gap-y-6">
                    <h2 className="text-white text-5xl font-semibold text-center py-2">{title}</h2>
                    <p className="text-white max-w-[570px] py-2 text-base text-center">{desc}</p>
                </div>
             </div>
            
        </div>
    )
}

export default BgPages