import React, { useEffect } from 'react'
import Header from './Hedr'
import Navbar from './Navbar'
import { getUserDetails } from '../../redux/slices/userSlice'
import { useDispatch } from 'react-redux'

const Head = () => {

  const dispatch = useDispatch()
  // getting user details after component mount
  useEffect(() => {
    console.log("calling getUserDetails")
    dispatch(getUserDetails())
  })

  return (
    <div>
      <Header />
      <Navbar />
    </div>
  )
}

export default Head
