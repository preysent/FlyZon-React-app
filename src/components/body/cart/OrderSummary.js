import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { placeOrder } from '../../../redux/slices/orderSlice'
import { getUserDetails } from '../../../redux/slices/userSlice'
import { getCartItems } from '../../../redux/slices/cartSllice'

const OrderSummary = (props) => {
    const { subtotal, mode } = props
    const user = useSelector((store) => store.user.user)
    const dispatch = useDispatch()


    const handleCheckout = async () => {
        const Response = await dispatch(placeOrder({ products: user.cart, totalAmount: subtotal, shippingAddress: user.address }))

        if(Response.payload.status === "ok") {
            dispatch(getUserDetails())
            dispatch(getCartItems())
        }
    }
    return (
        <div>
            <div className={`${(mode === 'dark') ? 'bg-fuchsia-200 text-slate-900' : 'bg-white'} p-4 shadow-md`}>
                <h4 className="font-semibold mb-4">Order Summary</h4>
                <div className="flex justify-between mb-2">
                    <span className="text-gray-500">Subtotal:</span>
                    <span className="text-gray-700">${subtotal}</span>
                </div>
                <div className="flex justify-between mb-2">
                    <span className="text-gray-500">Shipping:</span>
                    <span className="text-gray-700">$10.00</span>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between font-semibold">
                    <span>Total:</span>
                    <span>${subtotal + 10}</span>
                </div>
                <button onClick={handleCheckout} className="mt-4 bg-purple-600 hover:bg-purple-700 text-white rounded-md px-4 py-2 ">Checkout</button>

            </div>
        </div>
    )
}

export default OrderSummary
