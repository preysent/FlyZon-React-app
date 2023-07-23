import React from 'react'
import { useSelector } from 'react-redux';

import { Link } from "react-router-dom";

const Navbar = () => {

    let { mode } = useSelector(store => store)

    return (
        <>
            <section className={`flex items-center ${(mode==="dark")?" bg-purple-900":"bg-fuchsia-200"} `}>

                <nav className={`container flex justify-start sm:justify-center gap-8 w-full py-2 px-5 ${(mode==="dark")?"text-purple-100":"text-purple-500"} overflow-x-auto sticky left-0`}>
                    <Link to="/">Fashion</Link>
                    <Link to="/">Electronics</Link>
                    <Link to="/">Mobile</Link>
                    <Link to="/">Grocery</Link>
                    <Link to="/">Appliances</Link>
                </nav>

            </section>
        </>
    )
}

export default Navbar
