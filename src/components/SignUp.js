import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createUser } from '../redux/slices/userSlice'
import { useHistory } from "react-router-dom";


const SignUp = () => {

  //initial state of form elemnt
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", address: "", seller: false })


  const onchange = (e) => {    
    //importent syntex for value
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  // handle the isSeller
  const handleSeller = (e)=>{
    setCredentials({...credentials, [e.target.name]:e.target.checked})
  }


  // history for redirect the user 
  const history = useHistory()
  const dispatch = useDispatch()

  // hendle form submit 
  const handleSubmit = async(event)=>{

    //prevent the page reload
    event.preventDefault()

    // creting the new user 
    await dispatch(createUser({credentials}))

    history.push("/")
    //After form submit updating value of forms element
    setCredentials({ name: "", email: "", password: "", address: "", seller: false })
  }

  return (
    <>

      <div className="bg-gray-100 flex items-center justify-center min-h-screen">
        <div className="w-full max-w-md">

          <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 py-6">

            {/* input for name */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
              <input onChange={onchange} value={credentials.name} name="name" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Enter your name" />
            </div>

            {/* input for email */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
              <input onChange={onchange} value={credentials.email} name="email" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter your email" />
            </div>

            {/* input for password */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
              <input onChange={onchange} value={credentials.password} name="password" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Enter your password" />
            </div>

            {/* input for address */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">Address</label>
              <textarea onChange={onchange} value={credentials.address} name="address" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="address" rows="3" placeholder="Enter your address"></textarea>
            </div>

            {/* is seller */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="seller">Seller</label>
              <input onChange={handleSeller} value={true} name="seller" className="mr-2 leading-tight" id="seller" type="checkbox" />
              <span className="text-gray-700 text-sm">I am a seller</span>
            </div>

            <div className="flex items-center justify-between">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                Sign Up
              </button>
            </div>

          </form>

        </div>
      </div>

    </>
  )
}

export default SignUp
