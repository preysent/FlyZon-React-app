import React,{ useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMode } from '../../redux/slices/modeSlice'

import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import UserSlide from './UserSlide';
import { fetchProducts } from '../../redux/slices/productSlice';


const Hedr = () => {

    let { mode, user } = useSelector(store => store)
    const User = user.user
    const history = useHistory()
    const dispatch = useDispatch()
    const [searchStr, setSearchStr] = useState('')

    // take to login page
    const handleLogin = () => {
        history.push("/login")
    }

    // take to sign up page
    const handleSignUp = () => {
        history.push("/signUp")
    }

    // take to cart section 
    const openCart = () => {
        //    dispatch( getCartItems())
        history.push("/cart")
    }

        
    // handle searc
    const onchange = (e)=>{
        setSearchStr(e.target.value)
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        dispatch(fetchProducts({searchStr}))
        setSearchStr('')
    }


    return (
        <>
            <section className={`flex items-center flex-col ${(mode === "dark") ? "bg-purple-950" : "bg-purple-600"}`}>
                <header className="container p-2 flex justify-between items-center">

                    <div className=" font-sans font-bold  text-white text-2xl md:w-1/12">
                        <Link className="underline cursor-pointer" to="/"> FlyZon </Link>
                    </div>


                    <form onSubmit={handleSubmit} className="w-5/12 rounded hidden md:flex">
                        <input onChange={onchange} type="text" placeholder="Search at FlyZon" value={searchStr}
                        className={`w-full p-2 rounded focus:outline-none focus:ring focus:ring-violet-300  ${(mode === "dark") ? "bg-purple-400 placeholder-white" : ""}`} />

                        <button type='submit' className={`flex justify-center items-center p-2 px-4 rounded-md text-white`}>

                            {/* search icon  */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                            </svg>

                        </button>
                    </form>



                    <div className=" flex justify-end md:w-5/12 items-center ">

                        <svg
                            className=" text-white p-1 m-1 w-8 font-medium bi bi-moon-stars"
                            onClick={() => { dispatch(toggleMode()) }}
                            xmlns="http://www.w3.org/2000/svg"
                            width="60"

                            fill="currentColor" viewBox="0 0 16 16">
                            <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z" />
                            <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z" />
                        </svg>


                        {/* cart icon */}
                        {user.login && <div onClick={openCart} className='relative cursor-pointer'>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="60"
                                fill="currentColor"
                                className=" text-white p-1 m-1 mx-2 w-10 font-medium bi bi-cart3" viewBox="0 0 16 16">

                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                            </svg>

                            {<div
                                className={`absolute bottom-7 left-6 text-white bg-red-700  px-1 rounded-lg 
                           ${(User.cart.length) ? "" : "hidden"}`}
                            >
                                {`${User.cart.length}`}
                            </div>}

                        </div>}


                        {/* if user login  */}
                        {user.login && <UserSlide />}

                        {/* if usee is not login then it visible  */}
                        {!user.login && <button onClick={handleLogin} className={` ${(mode === "dark") ? "bg-purple-400 text-white " : "bg-white"} p-1 m-1 px-4 h-10 font-medium  rounded-md `}  >
                            Login
                        </button>}


                        {!user.login && <button onClick={handleSignUp} className={`${(mode === "dark") ? "bg-purple-400 text-white " : "bg-white"}  p-2 m-1 px-4 font-medium  rounded-md hidden sm:flex h-10`} >
                            Sign Up
                        </button>}
                    </div>

                </header>
            </section>
        </>
    )
}

export default Hedr
