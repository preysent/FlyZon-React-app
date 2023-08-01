import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';

import { fetchOneProduct } from '../../redux/slices/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import Loading from './Loading';
import { addToCart, getUserDetails } from '../../redux/slices/userSlice';
import { placeOrder } from '../../redux/slices/orderSlice';


const ProductPage = () => {

    const { id } = useParams()


    const dispatch = useDispatch()

    // getting details from store
    let mode = useSelector(store => store.mode)
    const item = useSelector(state => state.products.product);
    const User = useSelector(store => store.user.user)


    //the function run before the page rendering
    useEffect(() => {
        dispatch(fetchOneProduct(id))
    }, [id, dispatch]);

    //adding product to cart 
    const handleAddToCart = () => {
        dispatch(addToCart({ productId: item._id }))
    }


    const handleChangeImage = (e) => {
        const img = document.getElementById("mainImg")
        img.src = e.target.src

        const list = document.getElementsByClassName('imgLst')
        const imgs = Array.from(list)     // convert html collection to array

        imgs.forEach(element => {
            element.classList.remove('border')
        });

        e.target.classList.add('border')
    }


    // Order one product 
    const handleBuyNow = async () => {

        const productId = item._id
        const quantity = 1
        const products = [{ productId, quantity }]
        const totalAmount = item.price
        const shippingAddress = User.address
        const type = "one"
        const object = { products, totalAmount, shippingAddress }

        const responce = await dispatch(placeOrder({ object, type }))

        if (responce.payload.status === "ok")
            dispatch(getUserDetails())
    }


    return (
        // if item is found then only component render
        (!item)
            ? <Loading />
            : <>

                <section className={`flex justify-center ${(mode === 'dark') ? "bg-purple-950 text-white" : ""}`}>
                    <div className="container  flex justify-center lg:justify-start relative flex-wrap lg:flex-nowrap">

                        {/* image section  */}
                        <div className='lg:w-5/12 p-4 flex flex-col justify-between '>

                            <div className='h-[25rem] object-contain flex justify-center items-center gap-1'>
                                <img id='mainImg' src={`${item.images[0]}`} alt="pro" className='max-w-full max-h-full' />
                            </div>

                            <div className='flex gap-1'>
                                {item.images.map((img) => {

                                    return <div className='max-h-[7rem]  border-purple-500 outline-4 imgLst ' >
                                        <img src={img} onClick={handleChangeImage} alt="pro" className='max-h-full' />
                                    </div>

                                })}
                            </div>

                        </div>

                        <div className="absolute top-5 left-5">
                            <svg xmlns="http://www.w3.org/2000/svg" height="19" fill="currentColor" className="bi bi-heart"
                                viewBox="0 0 16 16">
                                <path
                                    d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                            </svg>
                        </div>

                        {/* title and discription sectin  */}
                        <div className="p-8 w-full lg:w-7/12">
                            <h4 className="font-semibold text-2xl py-4">{`${item.productTitle}`}
                            </h4>
                            <p className="pb-2 text-lg">Only ${`${item.price}/-`}</p>

                            <div className="flex gap-3 py-1">

                                <button onClick={handleBuyNow} className=" bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full">
                                    Buy Now
                                </button>

                                <button onClick={handleAddToCart} className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full">
                                    Add to Cart
                                </button>
                            </div>

                            {/* reating bar */}
                            <div className="">
                                <p className="py-2 text-base">4.5</p>
                                <div className=" rounded-full h-4 w-2/4 border-2 border-purple-600">
                                    <div className=" h-full bg-yellow-400 " id="reating-bar"></div>
                                </div>

                            </div>

                            {/* description of the product  */}
                            <div className='py-6'>
                                {item.description.map((line) => {
                                    return <p className='' key={line}>{`${line}`}</p>
                                })}
                            </div>
                        </div>

                    </div>


                </section>
            </>
    )
}

export default ProductPage
