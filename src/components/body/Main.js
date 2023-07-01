import React from 'react'
import Items from './Items'
import ImageSlider from './ImageSlider'


const Main = () => {
  return (
    <>
    <ImageSlider/>
        <section className=" bg-fuchsia-200 ">
        
        <div className="container flex flex-wrap m-auto gap-4 p-4 justify-center">

        <Items/>
        <Items/>
        <Items/>
        <Items/>
        <Items/>
        </div>
        </section>
    </>
  )
}

export default Main
