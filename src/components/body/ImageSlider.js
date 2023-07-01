import React, { useEffect, useState } from 'react'
import "./imgSlider.css"

const ImageSlider = () => {

    //JS for slide the image-----------------------------
    let [imgArr, setImgArr] = useState([])
    let [counter, setCounter] = useState(0)

    useEffect(() => {
        let elm = []
        for (let i = 0; i < 4; i++) {
            elm.push(document.querySelector(`#slide-${i + 1}`))
        }
        setImgArr(elm)
    }, [])




    imgArr.forEach((img,index)=>{
        img.style.left = (`${index*100}%`)

    })    

    setInterval(() => {
         setCounter(counter+1)
         if(counter>3) setCounter(counter=0)
        imgArr.forEach((image)=>{
            image.style.transform = `translateX(${-counter*100}%)`
        })        
    }, 10000);

    //------------------------------------------------------------------------------





    return (
        <>
            <section className=" mx-auto flex items-center justify-center h-60 relative">

                <div className=" w-full h-full bg-cover absolute" id="slide-1">
                </div>

                <div className=" w-full h-full bg-cover absolute" id="slide-2">
                </div>

                <div className=" w-full h-full bg-cover absolute" id="slide-3">
                </div>

                <div className=" w-full h-full bg-cover absolute" id="slide-4">
                </div>

            </section>
        </>
    )
}

export default ImageSlider
