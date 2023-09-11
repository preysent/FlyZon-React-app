import React, { useEffect } from 'react'
import Header from './Hedr'
import Navbar from './Navbar'
import { getUserDetails } from '../../redux/slices/userSlice'
import { useDispatch } from 'react-redux'
import Alert from './Alert'

const Head = () => {

  const dispatch = useDispatch()
  // getting user details after component mount
  useEffect(() => {
    dispatch(getUserDetails())
  },[dispatch])

  return (
    <div>
      <Alert/>
      <Header />
      <Navbar />
    </div>
  )
}

export default Head
