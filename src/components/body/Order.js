import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchOrder } from '../../redux/slices/orderSlice';
import Loading from './Loading';

const Order = () => {
    const { oId } = useParams()
    const dispatch = useDispatch()
    const User = useSelector(store => store.user.user)
    const orderSlice = useSelector(store => store.order)
    const order = orderSlice.Order


    useEffect(() => {
        dispatch(fetchOrder(oId))
    }, [dispatch, oId])

    return (
        (orderSlice.isLoading)
            ? <Loading />
            :

            <>
                <section className="bg-gray-100 flex items-center justify-center ">
                    <div className="max-w-4xl w-full mx-auto bg-white rounded shadow-md p-8 container">
                        <h2 className="text-2xl font-bold mb-4">Order Details</h2>

                        <div>
                            <p><strong>User Name:</strong> {User.firstName}</p>
                            <p><strong>Status:</strong> {order.status}</p>
                            <p><strong>Order Date:</strong> {order.createdAt}</p>
                            <p><strong>Shipping Address:</strong></p>
                            {order.shippingAddress && <p>
                                {order.shippingAddress.street}
                                <br />
                                {order.shippingAddress.city}, {order.shippingAddress.state}, {order.shippingAddress.country},
                                {order.shippingAddress.zipCode}
                            </p>}

                            <p><strong>Order Id : </strong>{order._id}</p>
                            <p><strong>Product List:</strong></p>

                            {order.productList && <ul>
                                {order.productList.map((product) => (
                                    <li key={product.productId}>
                                        <strong>{product.productTitle}</strong> - ${product.price} x {product.quantity}
                                        <div className='flex p-4 gap-2 flex-wrap'>
                                            {product.images.map((image) => (
                                                <img
                                                    key={image}
                                                    src={image}
                                                    alt={product.productTitle}
                                                    className="w-32 h-32  rounded object-contain"
                                                />
                                            ))}
                                        </div>
                                    </li>
                                ))}
                            </ul>}
                            <p>
                                <strong>Total Amount:</strong> ${order.totalAmount}
                            </p>
                        </div>
                    </div>
                </section>

            </>
    )
}

export default Order
