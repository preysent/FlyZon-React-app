import React from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { deleteTheCartElement } from '../../../redux/slices/userSlice'
import { getCartItems } from '../../../redux/slices/cartSllice'

const CartItem = (props) => {

    const cart = props.item  // contain quantity and product
    const { product } = cart
    const history = useHistory()
    const dispatch = useDispatch()

    const goToProductPage = () => {
        history.push(`/product/${product._id}`)
    }

    const handleDelete = async()=>{
        await dispatch(deleteTheCartElement(product._id))
        await dispatch(getCartItems())
    }

    return (
        <>
            <div className="flex items-center mb-4 cursor-pointer">
                <img src={`${product.images[0]}`} alt="Item 1" className="w-20 h-20 object-contain mr-4" />
                <div  onClick={goToProductPage} >
                    <h4 className="font-semibold">{product.productTitle}</h4>
                    <p className="text-gray-500">$ {product.price}/-</p>
                    <div className="flex items-center mt-2">
                        <button className="text-gray-500 focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 w-4">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
                            </svg>
                        </button>
                        <span className="text-gray-700 mx-2">{cart.quantity}</span>
                        <button className="text-gray-500 focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 w-4">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className='flex-grow mb-auto flex justify-end'>
                    <svg onClick={handleDelete} xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-trash3 h-6" viewBox="0 0 16 16">
                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                    </svg>
                </div>
            </div>
        </>
    )
}

export default CartItem
