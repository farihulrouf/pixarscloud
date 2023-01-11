import React from 'react'
import Link from 'next/link'
import {listMenu} from '../components/data/dataContent'
const ListMenu = () => {
    return(
        <React.Fragment>
            <ul className="sm:relative sm:mr-8 mr-1 sm:flex sm:justify-end sm:py-0 sm:top-0 sm:space-x-5 absolute py-2 top-[60px] left-0 right-0">
                {listMenu.map((item,index) =>
                    <li key={index} className="text-sm text-white sm:pl-0 sm:pb-0 pl-8 pb-1 font-palo hover:text-teal-300">
                        {/*
                        <Link href={item.link}><a>{item.text}</a></Link>
                        */}
                        </li>
                )}
            </ul>
        </React.Fragment>
    )
}
export default ListMenu