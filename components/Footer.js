import Link from 'next/link'
import {listMenu} from '../components/data/dataContent'
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaDribbble } from "react-icons/fa";
const Footer = () => {
    const listm = listMenu.slice(0,3)
    return (
        <footer className="bg-black bg-cover bg-bottom bg-[url('/img/footer_bg.png')]">
             <div className="max-w-screen-xl mx-auto p-4 font-palo">
                <div className="pt-16 grid grid-cols-12 gap-4 pb-8">
                    <div className="md:col-span-6 col-span-9">
                        <div className="flex space-x-1">
                             <img className="w-12 h-12" src="/img/logo.svg" alt="logo" />
                             <p className="text-white text-lg">Pixarscloud</p>
                        </div>
                        <div className="py-6 max-w-[290px]">
                            <p className="text-white">
                            lorem ipsum dolor sit amet
                            </p>
                        </div>

                    </div>
                    <div className="md:col-span-3 col-span-3">
                        <h5 className="text-white">Menu</h5>
                        <ul className="py-1">
                        {/*
                         {listm.map((item, index) => (
                            <li key={index} className="text-white py-2"><Link href={item.link}><a>{item.text}</a></Link></li>
                         ))}
                         
                         <li  className="text-white py-2"><Link href="/"><a>Contact</a></Link></li>
                         */}
                        </ul>
                    </div>

                    <div className="md:col-span-3 col-span-12">
                         <h5 className="text-white">Follow us</h5>
                         <div className="py-3 flex space-x-1">
                            <div className="rounded-full h-8 w-8 flex justify-center items-center bg-white">
                                <FaFacebookF className="w-full text-blue-800" />
                            </div>
                            <div className="rounded-full h-8 w-8 flex justify-center items-center bg-white">
                                <FaTwitter className="w-full text-blue-800" />
                            </div>
                            <div className="rounded-full h-8 w-8 flex justify-center items-center bg-white">
                                <FaDribbble className="w-full text-blue-800" />
                            </div>
                            <div className="rounded-full h-8 w-8 flex justify-center items-center bg-white">
                                <FaLinkedinIn className="w-full text-blue-800" />
                            </div>
                         </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer