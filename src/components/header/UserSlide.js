import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const UserSlide = () => {

    let { user } = useSelector(store => store)
    const User = user.user

    // state for hidden class
    const [hidden, setHidden] = useState('hidden');


    // logout function
    const logOut = () =>{
        localStorage.clear();
    }

    // depeinds on hidden state
    useEffect(() => {
        // Get the dropdown button and menu
        var slideButton = document.getElementById('slideButton');
        var slideMenu = document.getElementById('slideMenu');

        // Function to toggle the dropdown menu
        function toggleDropdown() {
            (hidden === 'hidden')
                ? setHidden('')
                : setHidden('hidden');
        }

        // Event listener for dropdown button click
        slideButton.addEventListener('click', toggleDropdown);

        // Event listener for outside slide click
        window.addEventListener('click', function (event) {
            if (!slideButton.contains(event.target) && !slideMenu.contains(event.target)) {
                // slideMenu.classList.add('hidden');
                setHidden('hidden')
            }
        });
    }, [hidden])



    return (
        <>
            {/*  Slide trigger */}
            <div className="relative inline-block text-left ">
                <button id="slideButton" type="button" className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700">
                    <span>{`${User.name}`}</span>
                    <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M10 3.586L4.707 8.879a1 1 0 101.414 1.414L10 6.414l3.879 3.879a1 1 0 001.414-1.414L10 3.586zm0 12.828l5.293-5.293a1 1 0 10-1.414-1.414L10 14.586l-3.879-3.879a1 1 0 10-1.414 1.414L10 16.414z" clipRule="evenodd" />
                    </svg>
                </button>

                {/* user details slide */}
                <div id="slideMenu" className={` ${hidden} absolute right-0 z-10 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-2`}>
                    <h2 className='block px-4 py-2 text-center bg-gray-100'>Your Info</h2>

                    <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">{`Name: ${User.name}`}</li>
                    <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">{`Email: ${User.email}`}</li>
                    <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">{`Location: ${User.address}`}</li>

                    <button type='button' onClick={logOut} className='block px-4 py-2 bg-purple-400 float-right font-bold text-stone-100 rounded-xl hover:bg-purple-700'>Logout</button>

                </div>
            </div>

        </>
    )
}

export default UserSlide
