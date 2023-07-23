import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logOutUser } from '../../redux/slices/userSlice'
import { Link } from 'react-router-dom'

const UserSlide = () => {

    let { user } = useSelector(store => store)
    const User = user.user // getting user data form user


    // state for hidden class
    const [hidden, setHidden] = useState('hidden');
    const dispatch = useDispatch()

    // logout function
    const logOut = () => {
        dispatch(logOutUser())
    }

    // Function to toggle the dropdown menu
    function toggleDropdown() {
        (hidden === 'hidden') ? setHidden('') : setHidden('hidden');
    }



    // depeinds on hidden state
    useEffect(() => {
        // Get the dropdown button and menu
        var slideButton = document.getElementById('slideButton');
        var slideMenu = document.getElementById('slideMenu');


        // Event listener for outside slide click
        window.addEventListener('click', function (event) {
            if (!slideButton.contains(event.target) && !slideMenu.contains(event.target)) {
                setHidden('hidden')
            }
        });
    }, [hidden])



    return (
        <>{/*  Slide trigger */}
            <div className="relative inline-block text-left ">
                <button
                    id="slideButton"
                    type="button"
                    onClick={toggleDropdown}
                    className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700">

                    <span>{`${User.firstName}`}</span>

                    <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M10 3.586L4.707 8.879a1 1 0 101.414 1.414L10 6.414l3.879 3.879a1 1 0 001.414-1.414L10 3.586zm0 12.828l5.293-5.293a1 1 0 10-1.414-1.414L10 14.586l-3.879-3.879a1 1 0 10-1.414 1.414L10 16.414z" clipRule="evenodd" />
                    </svg>
                </button>



                {/* user details slide */}
                <div
                    id="slideMenu"
                    className={` ${hidden} absolute right-0 z-10 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-2`}
                >

                    <h2 className='block px-4 py-2 text-center bg-gray-100'>Your Info</h2>

                    <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                        {`Name: ${User.firstName} ${User.lastName}`}
                    </li>

                    <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                        {`Email: ${User.email}`}
                    </li>

                    <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                        {/* { Object.entries convert the Obj into array of key value paire} */}
                        {Object.entries(User.address).map(([key, value]) => (
                            <span key={key}>{`${key}: ${value}`}<br /> </span>
                        ))}
                    </li>

                    <hr className='w-48 h-[1px] mx-auto my-2 bg-purple-400 border-0 rounded ' />

                    {/* Order view page links */}

                    <div className='py-2'>
                        <h4 className='text-lg font-bold underline text-center mb-2'>Your Orders</h4>

                        {(!User.orders.length)
                            ? <p>!..not found</p>
                            : <>
                                {User.orders.map((order) => {

                                    return <Link key={order.oId} to={`/order/${order.oId}`}>
                                        <li onClick={toggleDropdown} className='flex justify-between hover:bg-purple-400 p-2 rounded  cursor-pointer'>
                                            <div>$ {order.oAmount}/-</div>
                                            <div className='text-sm'>{order.oStatus}</div>
                                        </li>
                                    </Link>
                                })}
                            </>
                        }

                    </div>

                    <button
                        type='button'
                        onClick={logOut}
                        className='block px-4 py-2 bg-purple-400 float-right font-bold text-stone-100 rounded-xl hover:bg-purple-700'>
                        Logout
                    </button>

                </div>
            </div>

        </>
    )
}

export default UserSlide
