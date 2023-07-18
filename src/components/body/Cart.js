import React from 'react'

const Cart = () => {
    return (
        <>
            <div class="bg-gray-100">
                <div class="container mx-auto py-8">
                    <h2 class="text-2xl font-semibold mb-4">Shopping Cart</h2>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* <!-- Cart items --> */}
                        <div>
                            <div class="bg-white p-4 shadow-md">
                                {/* <!-- Item 1 --> */}
                                <div class="flex items-center mb-4">
                                    <img src="path/to/item1.jpg" alt="Item 1" class="w-20 h-20 object-cover mr-4" />
                                    <div>
                                        <h4 class="font-semibold">Item 1</h4>
                                        <p class="text-gray-500">$19.99</p>
                                        <div class="flex items-center mt-2">
                                            <button class="text-gray-500 focus:outline-none">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-4 w-4">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path>
                                                </svg>
                                            </button>
                                            <span class="text-gray-700 mx-2">1</span>
                                            <button class="text-gray-500 focus:outline-none">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-4 w-4">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Item 2 --> */}
                                <div class="flex items-center mb-4">
                                    <img src="path/to/item2.jpg" alt="Item 2" class="w-20 h-20 object-cover mr-4" />
                                    <div>
                                        <h4 class="font-semibold">Item 2</h4>
                                        <p class="text-gray-500">$14.99</p>
                                        <div class="flex items-center mt-2">
                                            <button class="text-gray-500 focus:outline-none">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-4 w-4">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path>
                                                </svg>
                                            </button>
                                            <span class="text-gray-700 mx-2">1</span>
                                            <button class="text-gray-500 focus:outline-none">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-4 w-4">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Order summary --> */}
                        <div>
                            <div class="bg-white p-4 shadow-md">
                                <h4 class="font-semibold mb-4">Order Summary</h4>
                                <div class="flex justify-between mb-2">
                                    <span class="text-gray-500">Subtotal:</span>
                                    <span class="text-gray-700">$34.98</span>
                                </div>
                                <div class="flex justify-between mb-2">
                                    <span class="text-gray-500">Shipping:</span>
                                    <span class="text-gray-700">$5.00</span>
                                </div>
                                <hr class="my-2" />
                                <div class="flex justify-between font-semibold">
                                    <span>Total:</span>
                                    <span>$39.98</span>
                                </div>
                                <button class="mt-4 bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600">Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Cart
