import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/slices/productSlice';
import {Link} from 'react-router-dom'



const Navbar = () => {

    let { mode } = useSelector(store => store)
    const dispatch = useDispatch()

    const handleCategory = (ctgry)=>{
        console.log(ctgry)
        dispatch(fetchProducts({ctgry}))
    }

    return (
        <>
            <section className={`flex items-center ${(mode==="dark")?" bg-purple-900":"bg-fuchsia-200"} `}>

                <nav className={`container flex justify-start sm:justify-center gap-8 w-full py-2 px-5 ${(mode==="dark")?"text-purple-100":"text-purple-500"} overflow-x-auto sticky left-0 `}>
                    <Link to="/" onClick={()=>handleCategory("Fashion")} className="focus:outline-none">Fashion</Link>
                    <Link to="/" onClick={()=>handleCategory("Electronics")} className="focus:outline-none">Electronics</Link>
                    <Link to="/" onClick={()=>handleCategory("Mobile")} className="focus:outline-none">Mobile</Link>
                    <Link to="/" onClick={()=>handleCategory("Grocery")} className="focus:outline-none">Grocery</Link>
                    <Link to="/" onClick={()=>handleCategory("Appliances")} className="focus:outline-none">Appliances</Link>
                </nav>

            </section>
        </>
    )
}

export default Navbar
