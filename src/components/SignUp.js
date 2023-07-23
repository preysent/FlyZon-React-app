import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createUser } from '../redux/slices/userSlice'
import { useHistory } from "react-router-dom";


const SignUp = () => {

  //initial state of form elemnt
  const [credentials, setCredentials] = useState({
    firstName: "", lastName: "",
    email: "",
    password: "",
    number: "",
    street: "",
    city: "",
    state: "Maharastra",
    country: "India",
    zipCode: ""
  })


  const { user } = useSelector(store => store)

  const onchange = async (e) => {
    //importent syntex for value
    await setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  // destructring all credentials from state 
  const { firstName, lastName, email, password, number, street, city, state, country, zipCode } = credentials




  // history for redirect the user 
  const history = useHistory()
  const dispatch = useDispatch()

  // hendle form submit 
  const handleSubmit = async (event) => {

    //prevent the page reload
    event.preventDefault()

    // creting the new user 
    await dispatch(createUser({ firstName, lastName, email, password, number, address: { street, city, state, country, zipCode } }))

    //After form submit updating value of forms element
    setCredentials({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      number: "",
      street: "",
      city: "",
      state: "Maharastra",
      country: "India",
      zipCode: ""
    })
 
  
  }

  
  if (user.login)
  history.push('/')


  const bgImage = {
    backgroundImage: "url(https://images.pexels.com/photos/7233354/pexels-photo-7233354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)"
  }

  return (
    <div className='bg-gray-300 bg-cover px-4' style={bgImage}>

      <div className="flex items-center justify-center min-h-screen">
        <div className="max-w-lg w-full px-6 py-8 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6">Sign Up To FlyZon</h2>
          <form onSubmit={handleSubmit}>


            {/* <!-- First Name --> */}
            <div className="mb-4 flex flex-col sm:flex-row gap-2">
              <input onChange={onchange} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight outline-none focus:shadow-md" id="firstName" type="text" placeholder="First Name" name='firstName' value={firstName} />


              {/* <!-- Last Name --> */}
              <input onChange={onchange} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight outline-none focus:shadow-md" id="lastName" type="text" placeholder="Last Name" name='lastName' value={lastName} />
            </div>

            {/* <!-- Email --> */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
              <input onChange={onchange} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight outline-none focus:shadow-md" id="email" type="email" placeholder="Email" name='email' value={email} />
            </div>

            {/* <!-- Password --> */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
              <input onChange={onchange} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight outline-none focus:shadow-md" id="password" type="password" placeholder="Password" name='password' value={password} />
            </div>

            {/* <!-- Number --> */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="number">Number</label>
              <input onChange={onchange} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight outline-none focus:shadow-md" id="number" type="tel" placeholder="Number" name='number' value={number} />
            </div>

            {/* <!-- Address --> */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Address</label>

              <div className='grid sm:grid-cols-2 gap-2'>
                <input onChange={onchange} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight outline-none focus:shadow-md" type="text" placeholder="Street" name='street' value={street} />

                <input onChange={onchange} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight outline-none focus:shadow-md" type="text" placeholder="City" name='city' value={city} />

                <input onChange={onchange} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight outline-none focus:shadow-md" type="text" placeholder="State" name='state' value={state} />

                <input onChange={onchange} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight outline-none focus:shadow-md" type="text" placeholder="Country" name='country' value={country} />

                <input onChange={onchange} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight outline-none focus:shadow-md" type="text" placeholder="Zip Code" name='zipCode' value={zipCode} />

              </div>

            </div>

            {/* <!-- Submit Button --> */}
            <div className="flex items-center justify-between">
              <button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded outline-none focus:ring focus:ring-fuchsia-600" type="submit">
                Sign Up
              </button>
            </div>


          </form>
        </div>
      </div>

    </div>
  )
}

export default SignUp
