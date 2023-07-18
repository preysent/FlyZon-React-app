import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginUser } from '../redux/slices/userSlice'
import { useHistory } from "react-router-dom";

const Login = () => {

  const dispatch = useDispatch()
  const history = useHistory()

  // initial state of form
  const [credentials, setCredentials] = useState({ email: "", password: "" })


  const onchange = (e) => {
    //importent syntex for value
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }


  //submit form handlar wich call async funtion
  const submitForm = async(event) => {
    event.preventDefault();

    console.log(credentials)
     await dispatch(loginUser( {credentials} ))

    // after login user redirect to home page
     history.push("/")
    setCredentials({ email: "", password: "" })

  }

  const bgImage={
              backgroundImage:"url(https://images.pexels.com/photos/7233354/pexels-photo-7233354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)"    
}

  return (
    <>
      <section className="bg-gray-200 flex justify-center items-center h-screen bg-cover" style={bgImage}>

        {/* Division for side info */}

        

        {/* division for the login page  */}
        <div className="bg-white p-8 rounded shadow-lg">

          <h2 className="text-2xl font-bold mb-4">Login To FlyZon</h2>
          <form onSubmit={submitForm}>
            <div className="mb-4">

              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>

              <input value={credentials.email} onChange={onchange} type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded" placeholder="Enter your email" />

            </div>


            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password:</label>

              <input value={credentials.password} onChange={onchange} type="password" id="password" name="password" className="w-full px-3 py-2 border border-gray-300 rounded" placeholder="Enter your password" />

            </div>
            <button type="submit" className={`w-full  bg-purple-800 text-white  py-2 px-4 rounded hover:bg-purple-600`}>Login</button>
          </form>

        </div>

      </section>
    </>
  )
}

export default Login
