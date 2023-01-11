import React, { useState, useEffect } from "react"
import Link from 'next/link'
import ListMenu from './ListMenu'
import { HiMenu, HiX } from "react-icons/hi";
import Button from './Button'
const NavBar = () => {
    const [navbar, setNavbar] = useState(false)
    const [isOpen, setIsOpen] = useState(false);
    const changeBackground = () => {
      console.log(window.scrollY)
      if (window.scrollY >= 66) {
        setNavbar(true)
      } else {
        setNavbar(false)
      }
    }
    const handleClick = () => {
      setIsOpen(!isOpen)
    }
    useEffect(() => {
      changeBackground()
      // adding the event when scroll change background
      window.addEventListener("scroll", changeBackground)
    })

    return (
      <nav className={`fixed w-full font-play z-30 ${navbar ? "bg-gradient-to-r from-blue-500 py-2" : "bg-transparent py-4"} `}>
        <div className="max-w-screen-xl mx-auto pl-4 pr-4">
          <div className="grid grid-cols-12">
            <div className="col-span-4">
                <div className="flex space-x-1 items-center">
                    <a>
                    <Link href="/">
                      <img className="w-12 h-auto"src="/img/logo.svg" alt="logo" />
                    </Link>
                    </a>
                    <a className="text-white"><Link href="/">Pixarscloud</Link></a>
              
                </div>
            </div>
            <div className="col-span-8">
                <div className="flex justify-end space-x-4 items-center">
                    <div className={`${isOpen ? '' : 'hidden'} sm:block`}>
                        <ListMenu />
                    </div>
                    <div className="hidden sm:block">
                        <Button>Become a member</Button>
                    </div>
                    <button onClick={() => setIsOpen(!isOpen)} className="sm:hidden block">
                            <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                <HiMenu className="text-white w-8 h-auto" />
                                ) : (
                                <HiX className="text-white w-8 h-auto" />
                                )}
                    </button>
                   
                 </div>
             </div>
          </div>
        </div>   
      </nav>
    )
  }
  export default NavBar