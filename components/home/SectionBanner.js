import Button from '../Button'
const SectionBanner = () => {
    return (
        <div className="object-cover sm:min-h-[688px] min-h-[400px] bg-[url('/img/bg_nav.png')]">
            <div className="max-w-screen-xl mx-auto p-4 font-palo">
                <div className="grid grid-cols-12 grid-rows-3 gap-2 pt-[120px] pt-[120px]">
                    <div className="xl:col-span-5 lg:col-span-6 md:col-span-8 sm:col-span-9 col-span-12 row-span-2">
                        <h2 className="text-white sm:text-5xl text-4xl py-4 font-bold">A new way to revolutionise your workspace to yourself</h2>
                        <p className="text-white py-2 text-xl max-w-md font-normal">We are currently open for trial visits until the end of April, we invite you to try your new coworking space.</p>
                    </div>
                    <div className="sm:col-span-8 col-span-12">
                          <div className="bg-gradient-to-r from-gray-400 to-slate-400 opacity-90 shadow-xl flex items-center justify-between max-w-2xl sm:p-6 p-2 sm:mt-10 mt-2">
                            <p className="text-white font-semibold sm:text-base text-sm">Enter your email address</p>
                             <Button>Apply for membership</Button>
                          </div>
                     </div>
                </div>
            </div>   
        </div>
    )
}
export default SectionBanner 