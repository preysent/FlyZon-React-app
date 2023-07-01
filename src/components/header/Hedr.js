import React from 'react'

const Hedr = () => {
    return (
        <>
            <section className="flex items-center flex-col bg-purple-600">
                <header className="container  p-2 flex justify-between items-center">

                    <div className=" font-sans font-bold  text-white text-2xl md:w-1/12">
                        <h2 className="underline"> FlyZon </h2>
                    </div>

                    <form action="" className="w-5/12 rounded hidden md:flex">
                        <input type="text" placeholder="Search at FlyZon" className="w-full p-2 rounded " />
                    </form>

                    <div className=" flex justify-end md:w-3/12">
                        <button className="bg-white  p-1 m-1 px-4 font-medium  rounded-md ">
                            Login
                        </button>
                        <button className="bg-white p-2 m-1 px-4 font-medium  rounded-md hidden sm:flex">
                            Sign Up
                        </button>
                    </div>

                </header>
            </section>
        </>
    )
}

export default Hedr
