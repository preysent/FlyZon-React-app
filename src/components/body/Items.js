import React from 'react'

const Items = () => {
    return (
        <>
            <div className=" w-72 max-w-xs rounded-lg overflow-hidden shadow-lg bg-white ">
                <img src="https://m.media-amazon.com/images/I/61pBjsIyVeL._SY450_.jpg" alt="Product"className="w-full"/>
                    <div className="px-6 pt-4">
                        <div className="font-bold text-xl mb-2">Product Title</div>
                        {/* <p className="text-gray-700 text-base">Product description goes here. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit.</p> */}
                    </div>
                    <div className="px-6 py-4">
                        <span
                            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">$99.99</span>
                        <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full">Add to
                            Cart</button>
                    </div>
            </div>

        </>
    )
}

export default Items
