import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from './CartItem'
import OrderSummary from './OrderSummary'
import {useHistory} from 'react-router-dom'
import { getCartItems } from '../../../redux/slices/cartSllice'
import Loading from '../Loading'

const Cart = () => {

    const { cart, mode, user } = useSelector(store => store)
    const { cartList } = cart
    const history = useHistory()
    const dispatch = useDispatch()

    if(!user.login){
        history.push('/')
    }
    
    useEffect(()=>{
        // run only if user is logged in
        user.login && dispatch(getCartItems())

    },[dispatch,user.login])

    return (
        (cart.loading)
        ?<Loading />
        :<>
            <div className={`${(mode === 'dark') ? 'bg-purple-800 text-slate-200' : 'bg-fuchsia-100'} `}>
                <div className="container mx-auto py-8 px-1">
                    <h2 className="text-2xl font-semibold mb-4 px-2">Shopping Cart</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/*  Cart items  */}
                        <div>
                            <div className={` p-4 shadow-md ${(mode === 'dark') ? 'bg-fuchsia-200 text-slate-900' : 'bg-white'}`}>

                                {cartList.length>0 && cartList.map(item => 
                                <CartItem key={item.product._id} item= {item} />
                                )}

                            </div>
                        </div>
                        {/* order details */}
                        <OrderSummary subtotal = {cart.subtotal} mode={mode} />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Cart
