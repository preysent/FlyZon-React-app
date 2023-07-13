import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const Items = (props) => {

    let { mode } = useSelector(store => store)



    const item = props.item
    const { productTitle, price, images } = item

    return (
        <>
            <div className={`h-fit w-72 max-w-xs rounded-lg overflow-hidden shadow-lg  ${(mode === "dark") ? "bg-purple-950 text-white" : "bg-white"}`}>

                {/* redirect to the product page with item id */}
                <Link to= {`/product/${item._id}`}>
                    <div className='w-full h-auto'>
                        <img src={`${images[0]}`} alt="Product" className="w-full h-auto" />
                    </div>
                    <div className="px-6 pt-4">
                        <div className="font-bold text-xl mb-2">{`${productTitle}`}</div>
                        {/* <p className="text-gray-700 text-base">Product description goes here. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit.</p> */}
                    </div>
                </Link>



                <div className="px-6 py-4">
                    <span
                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{`${price}`}</span>
                    <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full">Add to
                        Cart</button>
                </div>
            </div>

        </>
    )
}

export default Items
