import React from 'react'

const Navbar = () => {
    return (
        <>
            <section className="flex items-center flex-col bg-fuchsia-200">

                <nav className="container flex justify-center gap-8  py-2 text-purple-500 overflow-x-auto">
                    <a href="/">Fashion</a>
                    <a href="/">Electronics</a>
                    <a href="/">Mobile</a>
                    <a href="/">Grocery</a>
                    <a href="/">Appliances</a>
                </nav>

            </section>
        </>
    )
}

export default Navbar
